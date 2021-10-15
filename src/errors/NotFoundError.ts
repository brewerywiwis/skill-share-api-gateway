import { statusCodeToDescription } from '../const/HttpStatusCode';
import CustomError from './CustomError';

class NotFoundError extends CustomError {
  public constructor(message?: string) {
    super(
      message || statusCodeToDescription['404'],
      '404',
      statusCodeToDescription['404'],
    );
  }
}

export default NotFoundError;
