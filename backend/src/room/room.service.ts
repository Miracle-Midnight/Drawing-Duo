import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from './entities/image.entity';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { SelectImageDto } from './dto/select-image.dto';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import * as path from 'path';
import console from 'console';

@Injectable()
export class RoomService {
  private readonly awsS3: AWS.S3;
  public readonly S3_BUCKET_NAME: string;

  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    private readonly configService: ConfigService,
  ) {
    this.awsS3 = new AWS.S3({
      accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'), // process.env.AWS_S3_ACCESS_KEY
      secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      region: this.configService.get('AWS_S3_REGION'),
    });
    this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME'); // nest-s3
  }

  async getAllImage() {
    return await this.imageRepository.find({
      where: { type: true },
      cache: 60000,
    });
  }

  async selectImage(selectImageDto: SelectImageDto) {
    const { roomid, imageid } = selectImageDto;

    const room = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['image'],
    });
    if (!room) {
      throw new NotFoundException('방이 존재하지 않습니다.');
    }

    const image = await this.imageRepository.findOneBy({ id: imageid });
    if (!image) {
      throw new NotFoundException('이미지가 존재하지 않습니다.');
    }

    room.image = image;
    return this.roomRepository.save(room);
  }

  async createRoom(id: number, createRoomDto: CreateRoomDto) {
    const newRoom = await this.roomRepository.create(createRoomDto);
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }
    newRoom.user = [user];
    await this.roomRepository.save(newRoom);
    return {
      roomid: newRoom.id,
      title: newRoom.title,
      userNickName: user.profile.nickname,
    };
  }

  async deleteRoom(id: number, userid) {
    const { userId } = userid;
    console.log(userId);
    const room = await this.roomRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!room) {
      throw new NotFoundException('방이 존재하지 않습니다.');
    }
    if (room.user.length > 1) {
      room.user = room.user.filter((element) => element.id != userId);
      return this.roomRepository.save(room);
    }
    return this.roomRepository.remove(room);
  }

  // 게임방에서 유저들이 그린 이미지 저장.
  async saveImage(roomid: number, folder: string, file: Express.Multer.File) {
    const curroom = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['image'],
    });
    if (!curroom) {
      throw new NotFoundException('방이 존재하지 않습니다.');
    }

    const key = `${folder}/${Date.now()}_${path.basename(
      file.originalname,
    )}`.replace(/ /g, '');

    const imagePath = `/${key}`;
    // 이미지 파일 S3에 저장.
    try {
      const s3Object = await this.awsS3
        .putObject({
          Bucket: this.S3_BUCKET_NAME,
          Key: key,
          Body: file.buffer,
          ACL: 'public-read',
          ContentType: file.mimetype,
        })
        .promise();
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }

    // DB에 변경사항 저장.
    const oldimage = curroom.image.image;
    const oldrgb = curroom.image.rgb;

    // 만약 기존 이미지 엔티티가 수정된 엔티티면 삭제.
    if (curroom.image.modified == true) {
      const deleteKey = curroom.image.frameImage;
      await this.imageRepository.remove(curroom.image);
      try {
        const s3Object = await this.awsS3
          .deleteObject({
            Bucket: this.S3_BUCKET_NAME,
            Key: deleteKey,
          })
          .promise();
      } catch (error) {
        // throw new BadRequestException(`File upload failed : ${error}`);
      }
    }

    // 새로운 이미지 엔티티 생성해서 curroom.image에 저장.
    const newimage = await this.imageRepository.create({
      type: true,
      modified: true,
      image: oldimage,
      rgb: oldrgb,
      frameImage: imagePath,
    });
    await this.imageRepository.save(newimage);
    curroom.image = newimage;
    await this.roomRepository.save(curroom);
    return curroom;
  }
}
