import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schemas";
import { categorySchema } from "./categories.schemas";

const realEstateSchema = z.object({
    id: z.number().int().positive(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number().default(0)),
    size: z.number().int().positive(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
});

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true
}).extend({
    address: addressCreateSchema,
    categoryId: z.number().int()
});

const realEstateFullSchema = realEstateSchema.extend({
    address: addressSchema,
    category: categorySchema
});

export { realEstateSchema, realEstateCreateSchema, realEstateFullSchema }