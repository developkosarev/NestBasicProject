import { Injectable } from '@nestjs/common';
import { SshConfigService } from './config/ssh.config';
import { MysqlConfigService } from './config/mysql.config';

@Injectable()
export class MysqlSshService {
  constructor(
    private sshConfigService: SshConfigService,
    private mysqlConfigService: MysqlConfigService
  ) {}

  run()  {
    const mysqlssh = require('mysql-ssh');
    const fs = require('fs');

    mysqlssh
      .connect(
        {
          host: this.sshConfigService.getHost(),
          user: this.sshConfigService.getUser(),
          privateKey: fs.readFileSync(this.sshConfigService.getPrivateKeyPpk()),
        },
        {
          host: this.mysqlConfigService.getHost(),
          user: this.mysqlConfigService.getUser(),
          password: this.mysqlConfigService.getPassword(),
          database: this.mysqlConfigService.getDb(),
        },
      )
      .then((client) => {
        client.query('SELECT * FROM `store_website`', function (err, results, fields) {
          if (err) throw err;
          console.log(results);
          mysqlssh.close();
        });
      })
      .catch((err) => {
        console.log(err);
      });



  }
}
