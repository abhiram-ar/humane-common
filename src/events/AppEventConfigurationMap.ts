// central event registry
import { AppEventSource, AppEventsTypes } from '.';
import {
   UserEventsTypes,
} from './user-service.events';

export const appEventConfigurations = {
   [UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED]: {
      source: AppEventSource.USER_SERVICE,
   },
   [UserEventsTypes.USER_SINGUP]: {
      source: AppEventSource.USER_SERVICE,
   },
} as const satisfies Record<AppEventsTypes, { source: AppEventSource }>;
