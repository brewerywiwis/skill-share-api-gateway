import { statusCodeToDescription } from '../const/HttpStatusCode';
import CustomError from './CustomError';

class InternalServerError extends CustomError {
  public constructor(message?: string) {
    super(
      message || statusCodeToDescription['500'],
      '500',
      statusCodeToDescription['500'],
    );
  }
}

export default InternalServerError;
