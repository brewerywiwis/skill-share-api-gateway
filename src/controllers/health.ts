import { Get, Tags, Route } from 'tsoa'
@Tags('/health')
@Route('/health')
export class HealthController {
  @Get()
  public async getHealth(): Promise<string> {
    return 'health fine'
  }
}
