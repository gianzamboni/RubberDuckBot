export class EnvironmentSettings {

  public readonly environment: string;
  public readonly botToken: string;
  public readonly webHookUrl?: string;
  public readonly port?: number;

  constructor(options: any) {
    this.environment = options.NODE_ENV;

    if(!options.BOT_TOKEN) throw "You should set up BOT_TOKEN as an environment variable";
    this.botToken = options.BOT_TOKEN;

    if(this.environment === 'production'){
      if(!options.WEBHOOK_ROOT_URL) throw "You should set up WEBHOOK_ROOT_URL as an environment variable";
      if(!options.PORT) throw "You should set up PORT as an environment variable";

      this.webHookUrl = options.WEBHOOK_ROOT_URL;
      this.port = options.PORT;
    }
  }
}