import { RootAppEvent } from '.';
export declare const RewardEventsTypes: {
    readonly USER_REWARDED: "user.rewarded";
};
export type UserRewardedEventPayload = {
    userId: string;
    amount: number;
};
export type UserRewardedEvent = RootAppEvent<typeof RewardEventsTypes.USER_REWARDED, UserRewardedEventPayload>;
export type RewardServiceEvents = UserRewardedEvent;
