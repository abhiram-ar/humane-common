import { AppError } from './AppError.abstract';
export declare class GenericError extends AppError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serialize(): {
        message: string;
        field?: string;
    }[];
}
