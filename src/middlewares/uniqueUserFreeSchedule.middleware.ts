import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

const uniqueUserFreeSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { date, hour } = req.body
    const userId: number = Number(res.locals.decoded.sub)

    const scheduleFound: Schedule | null = await schedulesRepository
    .createQueryBuilder("schedules")
    .where("schedules.userId = :userId", {userId: userId})
    .andWhere("schedules.date = :date", {date: date})
    .andWhere("schedules.hour = :hour", {hour: hour})
    .getOne();

    if (scheduleFound) {
        throw new AppError(
            "User schedule to this real estate at this date and time already exists", 409
        )
    };

    return next();
};

export default uniqueUserFreeSchedule;