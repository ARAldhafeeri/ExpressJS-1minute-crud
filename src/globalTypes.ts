import { Request, Response, Express, NextFunction } from 'express';

declare global {
    type APIResponse<Data> = { data: Data; message: string; status: boolean };
    type Controller = (req: Request, res: Response) => void;
    type Middleware = (req: Request, res: Response, next: NextFunction) => void;
}
