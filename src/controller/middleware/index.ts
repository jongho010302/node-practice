import express from 'express';
import { failedResponse } from '../../util/jsonResponse';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

export const checkJwt = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = req.headers.authorization as string;

    jwt.verify(token, JWT_SECRET_KEY);
    next();
  } catch (error) {
    return failedResponse(res, 401, '서버에 접속할 수 없습니다.');
  }
}