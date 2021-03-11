/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {ExpressAdapter} from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

import * as express from 'express';
import * as functions from 'firebase-functions';

  
const server = express();

export const createNestServer = async(expressInstance) => {
const app = await NestFactory.create(
  AppModule,
  new ExpressAdapter(expressInstance),
  
);

return app.init();
};


createNestServer(server)
.then(v => console.log('Nest Ready'))
.catch(err => console.error('Nest broken',err));

//Connection serveur Express à Firebase

export const api = functions.https.onRequest(server);
  



/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();*/
