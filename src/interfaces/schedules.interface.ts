import { z } from "zod";
import { schedulesCreateSchema, schedulesReadSchema, schedulesSchema } from "../schemas";

type TSchedule = z.infer<typeof schedulesSchema>;
type ScheduleCreate = z.infer<typeof schedulesCreateSchema>;
type ScheduleRead = z.infer<typeof schedulesReadSchema>;

export { TSchedule, ScheduleCreate, ScheduleRead };