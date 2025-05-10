import { UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';

// union of all appevents
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
