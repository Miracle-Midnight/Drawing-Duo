import { Get, Controller, Render } from '@nestjs/common';
import { Post, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsService } from './aws.service';

@Controller('api')
export class AppController {
  constructor(private readonly awsService: AwsService) {}
  @Get()
  root() {
    return {
      data: {
        title: 'Chattings',
      },
    };
  }

  @Post('upload1')
  @UseInterceptors(FileInterceptor('image'))
  async uploadMediaFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file.buffer);
    // return await this.awsService.uploadFileToS3('cats', file);
    return true;
  }
}
