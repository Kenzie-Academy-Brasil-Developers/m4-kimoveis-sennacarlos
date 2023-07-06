import { z } from "zod";

const categorySchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45)
});

const categoryCreateSchema = categorySchema.omit({ id: true });
const categoryReadSchema = z.array(categorySchema);

export { categorySchema, categoryCreateSchema, categoryReadSchema };