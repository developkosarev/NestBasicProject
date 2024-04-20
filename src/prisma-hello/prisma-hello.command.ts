import { Command, CommandRunner } from 'nest-commander';

//options: {isDefault: true}
@Command({ name: 'prisma-hello', arguments: '[task]', description: 'Prisma hello' })
export class PrismaHelloCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('Prisma hello!');
  }
}