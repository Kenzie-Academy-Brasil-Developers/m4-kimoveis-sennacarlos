import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

const verifyDataAndHourExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { date, hour, realEstateId} = req.body

    const dateAndHourFound: Schedule | null = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date: date })
    .andWhere("schedule.hour = :hour", {hour: hour})
    .getOne();

    if (dateAndHourFound) {
        throw new AppError(
            "Schedule to this real estate at this date and time already exists", 409
        )
    };

    return next();
};

export default verifyDataAndHourExists;