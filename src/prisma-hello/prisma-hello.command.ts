import { Command, CommandRunner } from 'nest-commander';
import { WebsiteService } from './website.service';
import { PrismaClient } from '@prisma/client';

@Command({
  name: 'prisma-hello',
  arguments: '[task]',
  description: 'Prisma hello',
})
export class PrismaHelloCommand extends CommandRunner {
  //constructor(private websiteService: WebsiteService) {
  //  super();
  //}

  //constructor() {
  //  super();
  //}

  async run(): Promise<void> {
    console.log('11111');

    console.log('Prisma hello!');

    const prisma = new PrismaClient();
    const result = await prisma.$queryRaw`SELECT * FROM store_website`;
    console.log(result);
  }
}
