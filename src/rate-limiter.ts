import { Request, Response, NextFunction } from 'express'

export const rateLimiter = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log('Here you go')
  next()
}
