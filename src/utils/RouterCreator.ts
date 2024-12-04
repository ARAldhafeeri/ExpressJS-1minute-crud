import { Router } from 'express';
import {IController} from "../entities/generic";

export const RouterCreator = (controller: IController): Router => {
    const router = Router();

    controller.fetch &&  router.get('/', (req, res) => controller.fetch!(req, res));
    controller.create && router.post('/', (req, res) => controller.create!(req, res));
    controller.update && router.put('/', (req, res) => controller.update!(req, res));
    controller.delete &&  router.delete('/', (req, res) => controller.delete!(req, res));

    return router;
};