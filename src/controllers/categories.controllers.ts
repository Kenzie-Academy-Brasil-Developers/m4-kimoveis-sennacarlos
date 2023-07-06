import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesServices } from "../services";

const create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const category: Category = await categoriesServices.create(req.body);
    return res.status(201).json(category);
};

const read = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const categories: Category[] = await categoriesServices.read();
    return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const id: number = Number(req.params.id);
    const category: Category = await categoriesServices.retrieve(id);

    return res.status(200).json(category);
};

export default { create, read, retrieve };