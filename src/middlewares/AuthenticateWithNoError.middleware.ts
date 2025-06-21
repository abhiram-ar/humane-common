import { Request, Response, NextFunction } from 'express';
import { JWTTokenPaylod } from '../Types/JWTTokenPayload.type';
import { verifyAccessToken } from '../utils/jwt/config';

declare global {
   namespace Express {
      interface Request {
         user?: JWTTokenPaylod;
      }
   }
}

export const AuthenticateWithNoError = (req: Request, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      return next();
   }

   const token = authHeader?.split(' ')[1];
   if (!token) {
      return next();
   }
   try {
      const payload = verifyAccessToken.execute(token);
      if (payload.type === 'user' || payload.type === 'admin') {
         req.user = payload;
      }
   } catch (error) {
      next();
   }
};
