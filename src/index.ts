import bodyParser from 'body-parser';
import express from 'express';
import { EnvironmentSettings } from './models/environment-settings';
import { RubberDuckBot } from './models/rubber-duck-bot';

let settings = new EnvironmentSettings(process.env);
let rubberDuckBot = new RubberDuckBot(settings.botToken, settings.webHookUrl);

if (settings.environment === 'production') {
  const app = express();
  app.use(bodyParser.json());
  app.listen(settings.port)
  rubberDuckBot.hookUpTo(app);
}