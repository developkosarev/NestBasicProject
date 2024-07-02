
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# lint
$ npm run lint
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Cli
```bash
npm run start:cli
npm run start:cli help basic
npm run start:cli prisma-hello

npm run start:cli basic demo
npm run start:cli basic demo -- --number=1 --shell=2 --options=3 --options 3 4
npm run start:cli sayhello demo -- --name=Sam --age=40

npm run start:cli tunnel-ssh
```

## Docker
```bash
docker build --tag nest-basic-project:v0.0.1 --file Dockerfile .
docker run --rm --name nest-basic-project nest-basic-project:v0.0.1 ls
docker run --rm --env S3_REGION=eu-central-1 \
                --env S3_BUCKET=xxx \
                --env S3_ACCESS_KEY=yyy \
                --env S3_SECRET_KEY=zzz \
                --name nest-basic-project nest-basic-project:v0.0.1 s3-bucket list
docker run --rm --env S3_REGION=eu-central-1 \
                --env S3_BUCKET=xxx \
                --env S3_ACCESS_KEY=yyy \
                --env S3_SECRET_KEY=zzz \
                --name nest-basic-project nest-basic-project:v0.0.1 dist/main-cli.js s3-bucket list
docker run --rm --env-file ./.env --name nest-basic-project nest-basic-project:v0.0.1 dist/main-cli.js s3-bucket list

docker tag nest-basic-project:v0.0.1 ghcr.io/developkosarev/nest-basic-project:v0.0.1
docker images ghcr.io/developkosarev/*
docker push ghcr.io/developkosarev/nest-basic-project:v0.0.1
docker run --rm --name nest-basic-project nest-basic-project:v0.0.1
docker run -d -p 3000:3000 --name nest-basic-project nest-basic-project:v0.0.2
```    

## S3 bucket
```bash
aws s3 cp file1.txt s3://my-bucket/file1.txt --profile=defaults
```

## SSH
https://www.npmjs.com/package/tunnel-ssh
https://www.npmjs.com/package/mysql-ssh
https://www.npmjs.com/package/ssh2

## Articles

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html
[building-your-first-nestjs-application-a-step-by-step-guide](https://dreamix.eu/insights/building-your-first-nestjs-application-a-step-by-step-guide/)
[sending-command-line-arguments-to-npm-script](https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script)
[https://blog.stackademic.com/react-file-upload-to-s3-via-nestjs-serverside-e9c7a2fdd019](https://blog.stackademic.com/react-file-upload-to-s3-via-nestjs-serverside-e9c7a2fdd019)