import { statusCodeToDescription } from '../const/HttpStatusCode'
import CustomError from './CustomError'

class UnauthorizedError extends CustomError {
  public constructor(message?: string) {
    super(
      message || statusCodeToDescription['401'],
      '401',
      statusCodeToDescription['401']
    )
  }
}

export default UnauthorizedError
