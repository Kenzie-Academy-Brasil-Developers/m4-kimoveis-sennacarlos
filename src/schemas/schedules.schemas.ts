import { z } from "zod";
import { realEstateFullSchema } from "./realEstate.schemas";
import { userSchema } from "./user.schemas";

const schedulesSchema = z.object({
    id: z.number().int().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int().positive(),
    userId: z.number().int().positive()
});

const schedulesCreateSchema = schedulesSchema.omit({
    id: true,
    userId: true
});

const schedulesReadSchema = schedulesSchema.omit({
    realEstateId: true,
    userId: true
}).extend({
    realEstate: realEstateFullSchema,
    user: userSchema
});

export { schedulesSchema, schedulesCreateSchema, schedulesReadSchema };