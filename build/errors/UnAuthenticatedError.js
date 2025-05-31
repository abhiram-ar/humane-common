"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthenticatedError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class UnAuthenticatedError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        Object.setPrototypeOf(this, UnAuthenticatedError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.UnAuthenticatedError = UnAuthenticatedError;
