"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    sign(data, secret, expiresIn) {
        const token = jsonwebtoken_1.default.sign(data, secret, { expiresIn: expiresIn });
        return token;
    }
    verify(token, secret) {
        return jsonwebtoken_1.default.verify(token, secret);
    }
}
exports.JWTService = JWTService;
