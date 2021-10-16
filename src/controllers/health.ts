import { Get, Tags, Route, Security, Request } from 'tsoa'
import { AuthenticationType } from '../const/AuthenticationType'
import { Request as ExpressRequest } from 'express'
@Tags('/health')
@Route('/health')
export class HealthController {
  @Get()
  public async getHealth(): Promise<string> {
    return 'health fine'
  }

  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('/security')
  public async getHealthSecurity(
    @Request() request: ExpressRequest
  ): Promise<string> {
    console.log(request.user)
    return 'health fine with security'
  }
}
