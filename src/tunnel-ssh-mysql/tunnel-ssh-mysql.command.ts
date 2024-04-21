import { Command, CommandRunner, Option } from 'nest-commander';
import { readFileSync } from "fs"
import { Client } from 'ssh2'

@Command({ name: 'tunnel-ssh', description: 'Tunnel SSH' })
export class TunnelSshMysqlCommand extends CommandRunner {
  async run(inputs: string[]): Promise<void> {
    console.log('Tunnel ssh')


    // const conn : Client = new Client();
    //
    // conn.on('ready', () => {
    //   console.log('Client :: ready');
    //
    //   conn.exec('uptime', (err, stream) => {
    //     console.log('update');
    //     if (err) throw err;
    //
    //     stream.on('close', (code: string, signal: string) => {
    //       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
    //       conn.end();
    //
    //     }).on('data', (data: any) => {
    //       console.log('STDOUT: ' + data);
    //
    //     }).stderr.on('data', (data: any) => {
    //       console.log('STDERR: ' + data);
    //
    //     });
    //   });
    //
    //   conn.exec('pwd', (err, stream) => {
    //     console.log('update');
    //     if (err) throw err;
    //
    //     stream.on('close', (code: string, signal: string) => {
    //       console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
    //       conn.end();
    //
    //     }).on('data', (data: any) => {
    //       console.log('STDOUT: ' + data);
    //
    //     }).stderr.on('data', (data: any) => {
    //       console.log('STDERR: ' + data);
    //
    //     });
    //   });
    //
    // })
    // .connect({
    //   host: getSshHost(),
    //   port: 22,
    //   username: getSshUser(),
    //   privateKey: readFileSync(getSshPrivateKey())
    // });

    console.log('Tunnel ssh END')
  }
}