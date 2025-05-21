"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class UserNotFoundError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 404;
        Object.setPrototypeOf(this, UserNotFoundError.prototype);
    }
    serialize() {
        return [
            {
                message: 'Invalid user',
            },
        ];
    }
}
exports.UserNotFoundError = UserNotFoundError;
