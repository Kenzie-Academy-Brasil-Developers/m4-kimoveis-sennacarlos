import { z } from "zod";
import { realEstateCreateSchema, realEstateFullSchema, realEstateSchema } from "../schemas";


type TRealEstate = z.infer<typeof realEstateSchema>;
type RealEstateFull = z.infer<typeof realEstateFullSchema>;
type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export { TRealEstate, RealEstateFull, RealEstateCreate };