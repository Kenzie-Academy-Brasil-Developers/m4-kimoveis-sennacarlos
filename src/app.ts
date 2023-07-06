import "reflect-metadata";
import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";
import { userRouter, 
    sessionRouter, 
    categoriesRouter, 
    realEstateRouter, 
    schedulesRouter 
} from "./routers";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);

app.use(middlewares.handleError);

export default app;
