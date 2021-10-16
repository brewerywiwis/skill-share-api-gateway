import config from '../config'
import axios from 'axios'
import {
  SignInRequest,
  SignUpRequest,
} from '../types/authenticationServiceType'

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

async function signup(body: SignUpRequest) {
  const response = await axios.post(
    `${config.accountServiceUrl}/api/v1/signup`,
    body
  )
  return response.data
}

async function signin(body: SignInRequest) {
  const response = await axios.post(
    `${config.accountServiceUrl}/api/v1/signin`,
    body
  )
  return response.data
}

async function getAllUsers(token: string) {
  const response = await axios({
    method: 'get',
    url: `${config.accountServiceUrl}/api/v1/users`,
    headers: { Authorization: 'Bearer ' + token },
  })
  return response.data
}

async function getMe(token: string) {
  const response = await axios({
    method: 'get',
    url: `${config.accountServiceUrl}/api/v1/me`,
    headers: { Authorization: 'Bearer ' + token },
  })
  return response.data
}

export default {
  authenticate,
  signup,
  signin,
  getAllUsers,
  getMe,
}
