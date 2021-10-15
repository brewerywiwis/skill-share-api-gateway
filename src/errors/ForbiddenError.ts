import { statusCodeToDescription } from '../const/HttpStatusCode';
import CustomError from './CustomError';

class ForbiddenError extends CustomError {
  public constructor(message?: string) {
    super(
      message || statusCodeToDescription['403'],
      '403',
      statusCodeToDescription['403'],
    );
  }
}

export default ForbiddenError;
