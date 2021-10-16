import { Tags, Route, Get, Path, Post, Body, Request, Security } from 'tsoa'
import authenticationService from '../services/authentication'
import { Request as ExpressRequest } from 'express'
import {
  SignInRequest,
  SignUpRequest,
} from '../types/authenticationServiceType'
import { AuthenticationType } from '../const/AuthenticationType'

@Tags('account')
@Route('/account')
export class AccountController {
  @Get('/auth/:token')
  public async getAuth(@Path('token') token: string): Promise<boolean> {
    return (await authenticationService.authenticate(token)).status
  }

  @Post('/signup')
  public async signup(@Body() body: SignUpRequest): Promise<any> {
    return await authenticationService.signup(body)
  }
  @Post('/signin')
  public async signin(@Body() body: SignInRequest): Promise<any> {
    return await authenticationService.signin(body)
  }

  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('/users')
  public async getAllUsers(@Request() req: ExpressRequest): Promise<any> {
    return await authenticationService.getAllUsers(req.user!.token)
  }

  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('/me')
  public async getMe(@Request() req: ExpressRequest): Promise<any> {
    return await authenticationService.getMe(req.user!.token)
  }
}
