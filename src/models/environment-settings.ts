export class EnvironmentSettings {

  public readonly environment: string;
  public readonly botToken: string;
  public readonly webHookUrl: string;
  public readonly port: number;

  constructor(options: any) {
    this.environment = options.NODE_ENV;

    this.botToken = (options.BOT_TOKEN) ? options.BOT_TOKEN : null;
    this.webHookUrl = (options.WEBHOOK_ROOT_URL)? options.WEBHOOK_ROOT_URL : null;
    this.port = (options.PORT) ? options.PORT : 3000;

  }
}