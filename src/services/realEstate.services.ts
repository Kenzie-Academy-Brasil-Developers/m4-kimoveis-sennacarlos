import { RealEstate } from "../entities";
import { CategoryCreate, RealEstateCreate, RealEstateFull, TAdress } from "../interfaces";
import { categoriesRepository, realEstateRepository } from "../repositories";
import addressRepository from "../repositories/address.repository";

const create = async ( payload: RealEstateCreate ): Promise<RealEstateFull> => {
    const address = payload.address;

    const category: CategoryCreate | null = await categoriesRepository.findOne({
        where: {
            id: payload.categoryId
        }
    })

    const newAddress = addressRepository.create(address);
    await addressRepository.save(newAddress);

    const realEstate: RealEstateFull = realEstateRepository.create({
        ...payload,
        address: newAddress,
        category: category!
    })
    await realEstateRepository.save(realEstate);

    return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
    const realEstates: RealEstate[] = await realEstateRepository.find({
        relations: { address: true }
    });

    return realEstates;
}

export default { create, read };