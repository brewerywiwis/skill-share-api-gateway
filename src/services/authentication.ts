import config from '../config'
import axios from 'axios'

export interface AuthenticateResponse {
  token: string
  status: boolean
  user: { uid: string; username: string; roles: string[] } | undefined
  time: string
}

async function authenticate(token: string): Promise<AuthenticateResponse> {
  const authResponse = await axios.get(
    `${config.accountServiceUrl}${config.authenticateApi}/${token}`
  )
  return authResponse.data as AuthenticateResponse
}

async function signup() {}

async function signin() {}

export default {
  authenticate,
  signup,
  signin,
}
