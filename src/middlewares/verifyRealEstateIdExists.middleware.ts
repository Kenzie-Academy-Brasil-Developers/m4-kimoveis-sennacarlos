import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../repositories";
import { AppError } from "../errors";

const verifyRealEstateIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const realEstateId: number = req.params.id ? Number(req.params.id) : Number(req.body.realEstateId);

    const idFound: RealEstate | null = await realEstateRepository.findOneBy({
        id: realEstateId
    });

    if (!idFound) throw new AppError("RealEstate not found", 404);

    return next();
};

export default verifyRealEstateIdExists;