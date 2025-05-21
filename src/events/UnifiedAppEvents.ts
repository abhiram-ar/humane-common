import {
   UserAvatarKeyUpdatedEvent,
   UserBlockStatusUpdatedEvent,
   UserCoverPhotoKeyUpdatedEvent,
   UserCreatedEvent,
   UserNameBioUpdatedEvent,
   UserPasswordRecoveryRequestEvent,
   UserSignupEvent,
} from './user-service.events';

// union of all appevents
export type AppEvent =
   | UserPasswordRecoveryRequestEvent
   | UserSignupEvent
   | UserCreatedEvent
   | UserNameBioUpdatedEvent
   | UserAvatarKeyUpdatedEvent
   | UserCoverPhotoKeyUpdatedEvent
   | UserBlockStatusUpdatedEvent;
