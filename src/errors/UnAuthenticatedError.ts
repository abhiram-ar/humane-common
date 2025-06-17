import { AppError } from './AppError.abstract';

export class UnAuthenticatedError extends AppError {
   public statusCode = 401;
   constructor(public message: string = 'user not found in request/Unauthenticated') {
      super(message);
      Object.setPrototypeOf(this, UnAuthenticatedError.prototype);
   }
   serialize(): { message: string; field?: string }[] {
      return [
         {
            message: this.message,
         },
      ];
   }
}
