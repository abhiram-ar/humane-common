import { UserCreatedEvent, UserNameBioUpdatedEvent, UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent | UserCreatedEvent | UserNameBioUpdatedEvent;
