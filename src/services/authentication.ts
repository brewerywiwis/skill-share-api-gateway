import config from '../config'
import axios from 'axios'

interface AuthenticateSuccess {
  token: string
  status: boolean
  time: string
}
interface AuthenticateError {
  time: string
  message: string
}
async function authenticate(token: string): Promise<boolean> {
  const data = await axios.get(
    `${config.accountServiceUrl}${config.authenticateApi}/${token}`
  )
  return data.status ? true : false
}

export default {
  authenticate,
}
