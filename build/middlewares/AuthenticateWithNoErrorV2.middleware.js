"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateWithNoError = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthenticateWithNoError = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next();
    }
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token) {
        return next();
    }
    try {
        const payload = jsonwebtoken_1.default.decode(token);
        if (payload.type === 'user' || payload.type === 'admin') {
            req.user = payload;
        }
        next();
    }
    catch (error) {
        next();
    }
};
exports.AuthenticateWithNoError = AuthenticateWithNoError;
