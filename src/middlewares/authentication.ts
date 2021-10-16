import { Request } from 'express'
import { AuthenticationType } from '../const/AuthenticationType'
import UnauthorizedError from '../errors/UnauthorizedError'
import authenticationSerivce, {
  AuthenticateResponse,
} from '../services/authentication'
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
  scopes: string[]
): Promise<AuthenticateResponse> {
  if (securityName === AuthenticationType.JWT) {
    const token = req.get('Authorization')
    if (!token) {
      throw new UnauthorizedError('No token provided')
    }
    try {
      const auth = await authenticationSerivce.authenticate(token)
      if (auth.status && auth.user) {
        for (let role of auth.user.roles) {
          if (scopes.includes(role)) {
            return auth
          }
        }
      }
      throw new UnauthorizedError('Authentication error')
    } catch (error) {
      throw new UnauthorizedError('Authentication error')
    }
  }

  throw new UnauthorizedError('Authentication error')
}
