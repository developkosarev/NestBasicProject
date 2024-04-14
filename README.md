
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

## Docker
```bash
docker build --tag nest-basic-project:v0.0.1 --file Dockerfile .

docker tag nest-basic-project:v0.0.1 ghcr.io/developkosarev/nest-basic-project:v0.0.1
docker images ghcr.io/developkosarev/*
docker push ghcr.io/developkosarev/nest-basic-project:v0.0.1
docker run -rm --name nest-basic-project nest-basic-project:v0.0.1
docker run -d -p 3000:3000 --name nest-basic-project nest-basic-project:v0.0.2
```    

## S3 bucket
```bash
aws s3 cp file1.txt s3://my-bucket/file1.txt --profile=defaults
```


## Articles

[building-your-first-nestjs-application-a-step-by-step-guide](https://dreamix.eu/insights/building-your-first-nestjs-application-a-step-by-step-guide/)