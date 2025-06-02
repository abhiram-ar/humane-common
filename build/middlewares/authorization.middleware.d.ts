import { Request, Response, NextFunction } from 'express';
import { JWTTokenPaylodTypeField } from '../Types/JWTTokenPayload.type';
export declare const authorizedRoles: (...roles: (JWTTokenPaylodTypeField | "")[]) => (req: Request, res: Response, next: NextFunction) => void;
