import { Request, Response, NextFunction } from 'express';
import { JWTTokenPaylod } from '../Types/JWTTokenPayload.type';
import JWT from 'jsonwebtoken';

declare global {
   namespace Express {
      interface Request {
         user?: JWTTokenPaylod;
      }
   }
}

export const AuthenticateWithNoErrorV2 = (req: Request, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      return next();
   }

   const token = authHeader?.split(' ')[1];
   if (!token) {
      return next();
   }

   try {
      const payload = JWT.decode(token) as JWTTokenPaylod;
      if (payload.type === 'user' || payload.type === 'admin') {
         req.user = payload;
      }
      next();
   } catch (error) {
      next();
   }
};
