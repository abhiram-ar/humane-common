import { ZodError } from 'zod';
import { AppError } from './AppError.abstract';
export declare class ZodValidationError extends AppError {
    zodErrors: ZodError;
    statusCode: number;
    constructor(zodErrors: ZodError);
    serialize(): {
        message: string;
        toastMessage?: boolean;
        field?: string;
    }[];
}
