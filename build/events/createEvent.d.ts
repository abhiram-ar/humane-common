import { AppEvent, AppEvents } from '.';
export declare const createEvent: <T extends AppEvents>(eventType: T, payload: Extract<AppEvent, {
    eventType: T;
}>["payload"], version?: number) => Extract<AppEvent, {
    eventType: T;
}>;
