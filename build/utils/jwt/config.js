"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = void 0;
const JWTService_1 = require("./JWTService");
const VerifyAccessTokenToken_usercase_1 = require("./VerifyAccessTokenToken.usercase");
const jwtService = new JWTService_1.JWTService();
exports.verifyAccessToken = new VerifyAccessTokenToken_usercase_1.VerifyAccessToken(jwtService);
