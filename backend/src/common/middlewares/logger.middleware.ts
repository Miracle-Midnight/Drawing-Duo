import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.method}, ${res.statusCode}`,
        req.originalUrl,
      );
    });

    next();
  }
}
