import { AppError } from './AppError.abstract';

export class EventBusError extends AppError {
   public statusCode = 500;
   constructor(public message: string = 'Error publishing event to event bus') {
      super(message);
      Object.setPrototypeOf(this, EventBusError.prototype);
   }
   serialize(): { message: string; field?: string }[] {
      return [
         {
            message: this.message,
         },
      ];
   }
}
