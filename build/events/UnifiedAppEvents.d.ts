import { UserCreatedEvent, UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent | UserCreatedEvent;
