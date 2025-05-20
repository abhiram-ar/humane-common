"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class AuthorizationError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 403;
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.AuthorizationError = AuthorizationError;
