"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const errors_1 = require("../errors");
const config_1 = require("../utils/jwt/config");
const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new errors_1.UnAuthenticatedError('No authorization data in request header');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new errors_1.UnAuthenticatedError('No authorization token in request header');
    }
    const payload = config_1.verifyAccessToken.execute(token);
    if (payload.type === 'user' || payload.type === 'admin') {
        req.user = payload;
        return next();
    }
    throw new errors_1.UnAuthenticatedError('Something wrong with authentication');
};
exports.isAuthenticated = isAuthenticated;
