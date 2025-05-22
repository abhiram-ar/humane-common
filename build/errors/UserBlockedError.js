"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlockedError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class UserBlockedError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 403;
        Object.setPrototypeOf(this, UserBlockedError.prototype);
    }
    serialize() {
        return [
            {
                message: 'User is blocked by platform',
            },
        ];
    }
}
exports.UserBlockedError = UserBlockedError;
