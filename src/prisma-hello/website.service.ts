import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma-hello.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WebsiteService {
  constructor(private prisma: PrismaService) {}

  //async websites(): Promise<void> {
  //  console.log('1111111')
  //  const result = await this.prisma.$queryRawUnsafe('SELECT * FROM User')
  //  console.log(result)
  //}
}
