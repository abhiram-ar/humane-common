import { Request, Response, NextFunction } from 'express';
import { JWTTokenPaylod } from '../Types/JWTTokenPayload.type';
import { UnAuthenticatedError } from '../errors';
import JWT from 'jsonwebtoken';

declare global {
   namespace Express {
      interface Request {
         user?: JWTTokenPaylod;
      }
   }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      throw new UnAuthenticatedError('No authorization data in request header');
   }

   const token = authHeader.split(' ')[1];
   if (!token) {
      throw new UnAuthenticatedError('No authorization token in request header');
   }

   const payload = JWT.decode(token) as JWTTokenPaylod;
   if (payload.iss !== 'humane') throw new UnAuthenticatedError('Foregin token to humane');

   if (payload.type === 'user' || payload.type === 'admin') {
      req.user = payload;
      return next();
   }

   throw new UnAuthenticatedError('Something wrong with authentication');
};
