import { AppEvent, AppEventsTypes } from '.';
export declare const createEvent: <T extends AppEventsTypes>(eventType: T, payload: Extract<AppEvent, {
    eventType: T;
}>["payload"], version?: number) => Extract<AppEvent, {
    eventType: T;
}>;
