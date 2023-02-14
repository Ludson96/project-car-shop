import { Request, Response, NextFunction } from 'express';
import StatusError from '../utils/StatusError';

class ErrorHandler {
  public static execute(err: Error, req: Request, res: Response, _next: NextFunction) {
    let status = 500;
    let message = 'Internal Server Error';
    // let type = 'unknown_error';

    if (err instanceof StatusError) {
      status = err.status;
      message = err.message;
      // type = err.type;
    }

    res.status(status).json({ message });
    // res.status(status).json({ message, type });
  }
}

export default ErrorHandler;
