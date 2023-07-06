import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas/address.schemas";

type TAdress = z.infer<typeof addressSchema>;
type AdressCreate = z.infer<typeof addressCreateSchema>

export { TAdress, AdressCreate };