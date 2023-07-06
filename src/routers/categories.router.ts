import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoriesControllers } from "../controllers";

export const categoriesRouter: Router = Router()

categoriesRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    middlewares.uniqueCategory,
    middlewares.validateBody(categoryCreateSchema),
    categoriesControllers.create
);

categoriesRouter.get(
    "",
    categoriesControllers.read
);

categoriesRouter.get(
    "/:id/realEstate",
    middlewares.verifyCategoryIdExists,
    categoriesControllers.retrieve
);