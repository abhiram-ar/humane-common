"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticatedV2 = void 0;
const errors_1 = require("../errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuthenticatedV2 = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new errors_1.UnAuthenticatedError('No authorization data in request header');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new errors_1.UnAuthenticatedError('No authorization token in request header');
    }
    const payload = jsonwebtoken_1.default.decode(token);
    if (payload.iss !== 'humane')
        throw new errors_1.UnAuthenticatedError('Foregin token to humane');
    if (payload.type === 'user' || payload.type === 'admin') {
        req.user = payload;
        return next();
    }
    throw new errors_1.UnAuthenticatedError('Something wrong with authentication');
};
exports.isAuthenticatedV2 = isAuthenticatedV2;
