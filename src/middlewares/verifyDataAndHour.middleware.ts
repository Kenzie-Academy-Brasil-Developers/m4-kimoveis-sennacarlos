import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verifyDataAndHour = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const hourBody: string = req.body.hour;
    const hour: number = Number(hourBody.substring(0, 2));
    
    const date: Date = new Date(req.body.date);
    const day: number = date.getDay()

    if (hour < 8 || hour > 18) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    };

    if (day === 0 || day === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    };

    return next();
};

export default verifyDataAndHour;