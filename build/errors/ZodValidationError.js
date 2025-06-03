"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class ZodValidationError extends AppError_abstract_1.AppError {
    constructor(zodErrors) {
        super('Zod error');
        this.zodErrors = zodErrors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, ZodValidationError.prototype);
    }
    serialize() {
        const errors = this.zodErrors.errors.map((error) => {
            return { message: error.message, field: String(error.path) };
        });
        return errors;
    }
}
exports.ZodValidationError = ZodValidationError;
