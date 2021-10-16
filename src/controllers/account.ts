import { Tags, Route, Get, Path } from 'tsoa'
import authenticationService from '../services/authentication'

@Tags('account')
@Route('/account')
export class AccountController {
  @Get('/auth/:token')
  public async getAuth(@Path('token') token: string): Promise<boolean> {
    return (await authenticationService.authenticate(token)).status
  }
}
