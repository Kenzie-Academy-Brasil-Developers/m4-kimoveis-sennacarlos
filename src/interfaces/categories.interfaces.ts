import { z } from "zod";
import { categoryCreateSchema, categoryReadSchema, categorySchema } from "../schemas";

type Category = z.infer<typeof categorySchema>;
type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRead = z.infer<typeof categoryReadSchema>;

export { Category, CategoryCreate, CategoryRead };