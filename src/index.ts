import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { EnvironmentSettings } from './models/environment-settings';
import { RubberDuckBot } from './models/rubber-duck-bot';

if(process.env.NODE_ENV)
  dotenv.config({
    path: path.resolve(__dirname, '../.env')
  });

let settings = new EnvironmentSettings(process.env);
let rubberDuckBot = new RubberDuckBot(settings.botToken, settings.webHookUrl);

if (settings.environment === 'production') {
  const app = express();
  app.use(bodyParser.json());
  app.listen(settings.port)
  rubberDuckBot.hookUpTo(app);
}