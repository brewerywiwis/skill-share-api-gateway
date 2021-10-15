import { Request } from 'express'
import { AuthenticationType } from '../const/AuthenticationType'
import UnauthorizedError from '../errors/UnauthorizedError'
import authenticationSerivce from '../services/authentication'
interface Scope {
  resource: string
  action: string
  possession: string
}
interface JwtDecoded {
  uid: string
  roles: string[]
  iat: number
  exp: number
}

export async function expressAuthentication(
  req: Request,
  securityName: string,
  scopes?: string[]
): Promise<boolean> {
  if (securityName === AuthenticationType.JWT) {
    const token = req.get('Authorization')
    if (!token) {
      throw new UnauthorizedError('No token provided')
    }
    try {
      return await authenticationSerivce.authenticate(token)
    } catch (error) {
      throw new UnauthorizedError('Authentication error')
    }
  } else {
    throw new UnauthorizedError('Authentication error')
  }
}
