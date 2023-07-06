import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
    "",
    middlewares.validateBody(userCreateSchema),
    middlewares.uniqueEmail,
    userControllers.create
);

userRouter.get(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.read
);

userRouter.patch(
    "/:id",
    middlewares.verifyUserIdExists,
    middlewares.verifyToken,
    middlewares.isAdminOrOwner,
    middlewares.validateBody(userUpdateSchema),
    userControllers.update
);

userRouter.delete(
    "/:id",
    middlewares.verifyUserIdExists,
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.destroy
)