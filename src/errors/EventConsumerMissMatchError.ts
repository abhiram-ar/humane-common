import { AppError } from './AppError.abstract';

export class EventConsumerMissMatchError extends AppError {
   public statusCode = 400;
   constructor(public message: string = 'Event not configured for this consumer') {
      super(message);
      Object.setPrototypeOf(this, EventConsumerMissMatchError.prototype);
   }
   serialize(): { message: string; field?: string }[] {
      return [
         {
            message: this.message,
         },
      ];
   }
}
