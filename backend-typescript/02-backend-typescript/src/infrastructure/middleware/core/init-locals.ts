import { Request, Response, NextFunction } from 'express';

const initLocals = (req: Request, res: Response, next: NextFunction): void => {
  console.log('00000000001:initLocals');
  res.locals = res.locals || {};
  next();
};

export default initLocals;
