import { RootAppEvent } from '.';

export const RewardEventsTypes = {
   USER_REWARDED: 'user.rewarded',
} as const;

export type UserRewardedEventPayload = {
   userId: string;
   amount: number;
};

export type UserRewardedEvent = RootAppEvent<
   typeof RewardEventsTypes.USER_REWARDED,
   UserRewardedEventPayload
>;

export type RewardServiceEvents = UserRewardedEvent;
