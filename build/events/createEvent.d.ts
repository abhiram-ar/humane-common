import { AppEvent, AppEventsTypes } from '.';
export declare const createEvent: <T extends AppEventsTypes>(eventType: T, payload: Extract<AppEvent, {
    eventType: T;
}>["payload"]) => Extract<AppEvent, {
    eventType: T;
}>;
