export declare abstract class AppError extends Error {
    message: string;
    abstract statusCode: number;
    constructor(message: string);
    abstract serialize(): {
        message: string;
        field?: string;
    }[];
}
