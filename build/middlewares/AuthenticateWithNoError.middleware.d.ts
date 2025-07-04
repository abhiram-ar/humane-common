import { Request, Response, NextFunction } from 'express';
import { JWTTokenPaylod } from '../Types/JWTTokenPayload.type';
declare global {
    namespace Express {
        interface Request {
            user?: JWTTokenPaylod;
        }
    }
}
export declare const AuthenticateWithNoError: (req: Request, res: Response, next: NextFunction) => void;
