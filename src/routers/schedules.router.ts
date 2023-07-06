import { Router } from "express";
import middlewares from "../middlewares";
import { schedulesCreateSchema } from "../schemas";
import { schedulesControllers } from "../controllers";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.validateBody(schedulesCreateSchema),
    middlewares.verifyRealEstateIdExists,
    middlewares.uniqueUserFreeSchedule,
    middlewares.verifyDataAndHour,
    middlewares.verifyDataAndHourExists,
    schedulesControllers.create
);

schedulesRouter.get(
    "/realEstate/:id",
    middlewares.verifyToken,
    middlewares.isAdmin,
    middlewares.verifyRealEstateIdExists,
    schedulesControllers.retrieve
)