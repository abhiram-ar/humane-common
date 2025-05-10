import { UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
