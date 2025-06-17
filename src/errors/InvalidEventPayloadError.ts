import { AppError } from './AppError.abstract';

export class InvalidEventPayloadError extends AppError {
   public statusCode = 400;
   constructor(public message: string = 'Invalid event payload') {
      super(message);
      Object.setPrototypeOf(this, InvalidEventPayloadError.prototype);
   }
   serialize(): { message: string; field?: string }[] {
      return [
         {
            message: this.message,
         },
      ];
   }
}
