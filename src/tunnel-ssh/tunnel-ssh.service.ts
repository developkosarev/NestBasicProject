import { Injectable } from '@nestjs/common';
import { SshConfigService } from './config/ssh.config';
import { MysqlConfigService } from './config/mysql.config';
import { NodeSSH } from 'node-ssh';
import { PrismaClient } from '@prisma/client';
import { spawn } from 'child_process';

@Injectable()
export class TunnelSshService {
  constructor(
    private sshConfigService: SshConfigService,
    private mysqlConfigService: MysqlConfigService
  ) {}

  getShhHost() {
    return this.sshConfigService.getHost();
  }
  getShhUser() {
    return this.sshConfigService.getUser();
  }

  runV1(): Promise<string> {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log('7. Resolve mock');
        resolve("result");
      }, 1000);

    })
  }

  runV2(): Promise<NodeSSH> {
    const ssh = new NodeSSH()

    return ssh.connect({
      host: this.sshConfigService.getHost(),
      username: this.sshConfigService.getUser(),
      privateKeyPath: this.sshConfigService.getPrivateKet()
    })
  }

  runV3() {
    const ssh = new NodeSSH()

    return ssh.connect({
      host: this.sshConfigService.getHost(),
      username: this.sshConfigService.getUser(),
      privateKeyPath: this.sshConfigService.getPrivateKet()
    })
    .then(function() {
      // Command
      ssh.execCommand('pwd')
      .then(function(result) {
        console.log('STDOUT: ' + result.stdout)
        console.log('STDERR: ' + result.stderr)

        return ssh;
      }).then(ssh => {
        ssh.dispose()
      })
    })
  }

  async runV4(): Promise<void> {
    const ssh = new NodeSSH()
    await ssh.connect({
      host: this.sshConfigService.getHost(),
      username: this.sshConfigService.getUser(),
      privateKeyPath: this.sshConfigService.getPrivateKet()
    })

    //Command
    const response = await ssh.execCommand('pwd')
    console.log('STDOUT: ' + response.stdout)
    console.log('STDERR: ' + response.stderr)

    //Mysql
    const mySqlHost = this.mysqlConfigService.getHost()
    const channel = await ssh.forwardOut('127.0.0.1', 3307, mySqlHost, 3306)
    console.log('CHANNEL: ' + channel)


    //let promise = new Promise(function(resolve, reject) {
    //  setTimeout(() => {
    //    console.log('20 sec.')
    //    resolve("result");
    //  }, 20000);
    //})
    //
    //await promise

    const prisma = new PrismaClient();
    try {
      const result1 = await prisma.$queryRaw`SELECT * FROM store_website`;
      console.log(result1);
    } catch(err) {
      console.log(err);
    }

    ssh.dispose()

    //Mysql
    // ssh.forwardOut('localhost', 3307, mySqlHost, 3306)
    //   .then(async function(result) {
    //     console.log('STDOUT: ' + result.stdout)
    //     console.log('STDERR: ' + result.stderr)
    //
    //     const prisma = new PrismaClient();
    //     const result1 = await prisma.$queryRaw`SELECT * FROM store_website`;
    //     console.log(result1);
    //
    //     ssh.dispose()
    //     console.log('+++')
    //   })
  }

  async runV5(): Promise<void> {

    const localPort = 3307; // The local port you want to forward
    const databaseHost = this.mysqlConfigService.getHost(); // The IP of the database server in the remote network
    const remotePort = 3306; // The port on which the remote database is running
    const sshUser = this.sshConfigService.getUser(); // Your SSH username
    const sshHost = this.sshConfigService.getHost(); // The SSH server hostname or IP
    const sshPrivateKeyPath = this.sshConfigService.getPrivateKet()

    const sshCommand = `ssh`;
    const sshArgs = [
      '-i', `${sshPrivateKeyPath}`,
      '-L', `${localPort}:${databaseHost}:${remotePort}`,
      `${sshUser}@${sshHost}`,
      '-N'
    ];

    const sshProcess = spawn(sshCommand, sshArgs, {
      stdio: 'ignore', // This hides the output of the SSH command; use 'inherit' to see it in your console
      shell: true // This executes the command within a shell; useful for handling the SSH command correctly
    });

    console.log(`SSH tunnel established. Forwarding localhost:${localPort} to ${databaseHost}:${remotePort} through ${sshHost}.`);

    sshProcess.on('error', (err) => {
      console.error('Failed to start SSH tunnel:', err);
    });

    sshProcess.on('close', (code) => {
      console.log(`SSH tunnel closed with exit code ${code}`);
    });


    let promise = new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log('20 sec.')
        resolve("result");
      }, 20000);
    })

    await promise


    const prisma = new PrismaClient();
    try {
      const result1 = await prisma.$queryRaw`SELECT * FROM store_website`;
      console.log(result1);
    } catch(err) {
      console.log(err);
    }

  }

}
