export declare const AppEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: "user.password.recovery-requested";
    readonly USER_SINGUP: "user.singup";
    readonly USER_CREATED: "user.created";
    readonly USER_NAME_BIO_UPDATED: "user.name.bio.updated";
    readonly USER_AVATAR_UPDATED: "user.avatar.updated";
    readonly USER_COVER_PHOTO_UPDATED: "user.coverphoto.updated";
    readonly USER_BLOCK_STATUS_UPDATED: "user.isBlocked.updated";
};
export type AppEvents = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
