import {
   UserAvatarKeyUpdatedEvent,
   UserBlockStatusUpdatedEvent,
   UserCoverPhotoKeyUpdatedEvent,
   UserCreatedEvent,
   UserPasswordRecoveryRequestEvent,
   UserSignupEvent,
   UserUpdatedEvent,
} from './user-service.events';

// union of all appevents
export type AppEvent =
   | UserPasswordRecoveryRequestEvent
   | UserSignupEvent
   | UserCreatedEvent
   | UserUpdatedEvent
   | UserAvatarKeyUpdatedEvent
   | UserCoverPhotoKeyUpdatedEvent
   | UserBlockStatusUpdatedEvent;
