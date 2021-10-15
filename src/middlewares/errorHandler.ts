import { NextFunction, Request, Response } from 'express'
import CustomError from '../errors/CustomError'
import InternalServerError from '../errors/InternalServerError'

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof CustomError) {
    res
      .status(parseInt(err.statusCode, 10))
      .json({ message: err.message, description: err.statusDescription })
  } else {
    console.log(err)
    const internalServerError = new InternalServerError('Internal Server error')
    res.status(parseInt(internalServerError.statusCode, 10)).json({
      message: internalServerError.message,
      description: internalServerError.statusDescription,
    })
  }
}

export default errorHandler
