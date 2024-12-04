import { Request, Response } from 'express';

export const ControllerCreator =
    (fn: Controller ) => (req: Request, res: Response) => {
        Promise.resolve(fn(req, res)).catch((err: Error) => {
            res.status(400).send({ status: false, message: `Error: ${err.message}` });
        });
    };