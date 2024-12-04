import { Request, Response } from 'express';
import {ControllerCreator} from "../utils/ControllerCreator";

class Controller<T> {
    constructor(protected service: T) {
        this.service = service;
    }

    fetch = ControllerCreator(async (req: Request, res: Response) => {

        const data = await (this.service as any).find();
        res.status(200).json({ data, status: true, message: 'Data fetched' });
    });

    create = ControllerCreator(async (req: Request, res: Response) => {
        const data = await (this.service as any).create(req.body);
        res.status(201).json({ data, status: true, message: 'Created successfully' });
    });

    update = ControllerCreator(async (req: Request, res: Response) => {
        const data = await (this.service as any).update(req.body, req.query.id as string);
        res.status(200).json({ data, status: true, message: 'Updated successfully' });
    });

    delete = ControllerCreator(async (req: Request, res: Response) => {
        const data = await (this.service as any).delete(req.query.id as string);
        res.status(200).json({ data, status: true, message: 'Deleted successfully' });
    });
}

export default Controller;
