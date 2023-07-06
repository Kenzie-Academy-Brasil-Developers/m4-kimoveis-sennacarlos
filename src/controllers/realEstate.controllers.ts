import { Request, Response } from "express";
import { RealEstateCreate } from "../interfaces";
import { realEstateServices } from "../services";
import { RealEstate } from "../entities";

const create = async ( req: Request, res: Response): Promise<Response> => {
    const payload: RealEstateCreate = req.body;

    const realEstate = await realEstateServices.create(payload);

    return res.status(201).json(realEstate);
};

const read = async ( req: Request, res: Response): Promise<Response> => {
    const realEstates: RealEstate[] = await realEstateServices.read();

    return res.json(realEstates)
};

export default { create, read };