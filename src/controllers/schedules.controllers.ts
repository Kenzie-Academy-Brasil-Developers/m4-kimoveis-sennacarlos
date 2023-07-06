import { Request, Response } from "express";
import { ScheduleCreate } from "../interfaces";
import { schedulesServices } from "../services";

const create = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const payload: ScheduleCreate = req.body;
    const userId: number = Number(res.locals.decoded.sub)
    
    const schedule = await schedulesServices.create(payload, userId);
    
    return res.status(201).json({ message: "Schedule created" });
};

const retrieve = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const id: number = Number(req.params.id)
    
    const realEstate = await schedulesServices.retrieve(id)

    return res.status(200).json(realEstate);
};

export default { create, retrieve };