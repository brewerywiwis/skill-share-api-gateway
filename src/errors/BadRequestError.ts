import { statusCodeToDescription } from '../const/HttpStatusCode';
import CustomError from './CustomError';

class BadRequestError extends CustomError {
  public constructor(message?: string) {
    super(
      message || statusCodeToDescription['400'],
      '400',
      statusCodeToDescription['400'],
    );
  }
}

export default BadRequestError;
