import {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userReadSchema,
    userUpdateSchema
} from "./user.schemas";
import { sessionSchema } from "./session.schema";
import { 
    categorySchema,
    categoryCreateSchema, 
    categoryReadSchema 
} from "./categories.schemas";
import { realEstateSchema, 
    realEstateCreateSchema, 
    realEstateFullSchema 
} from "./realEstate.schemas";
import { schedulesSchema, 
    schedulesCreateSchema, 
    schedulesReadSchema
} from "./schedules.schemas";

export {
    userSchema,
    userCreateSchema,
    userReturnSchema,
    userReadSchema,
    userUpdateSchema,
    sessionSchema,
    categorySchema,
    categoryCreateSchema,
    categoryReadSchema,
    realEstateSchema,
    realEstateCreateSchema,
    realEstateFullSchema,
    schedulesSchema,
    schedulesCreateSchema,
    schedulesReadSchema
};