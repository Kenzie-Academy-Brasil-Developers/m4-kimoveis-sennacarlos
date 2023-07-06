import { NextFunction, Request, Response } from "express";
import { TAdress } from "../interfaces";
import { Address } from "../entities";
import addressRepository from "../repositories/address.repository";
import { AppError } from "../errors";

const uniqueAddress = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const address = req.body.address

    if(address) {
        const addressFound: Address | null = await addressRepository.findOne({where: address})

        if (addressFound) {
            throw new AppError("Address already exists", 409)
        }
    }

    return next();
};

export default uniqueAddress;