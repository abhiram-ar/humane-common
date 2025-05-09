import { RootAppEvent } from './eventSchema';
export declare const createEvent: <T, S, P>(eventType: T, eventSource: S, eventPayload: P) => RootAppEvent<T, S, P>;
