import { RealEstate, Schedule } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate } from "../interfaces";
import { realEstateRepository, schedulesRepository, userRepository } from "../repositories";

const create = async (
    payload: ScheduleCreate,
    userId: number
) => {
    const user = await userRepository.findOneBy({ id: userId });
    const realEstate = await realEstateRepository.findOneBy({ id: payload.realEstateId });

    const newSchedule: Schedule = schedulesRepository.create({
        ...payload,
        realEstate: realEstate!,
        user: user!
    });

    await schedulesRepository.save(newSchedule);

    return newSchedule;
};

const retrieve = async (
    realEstateId: number
): Promise<RealEstate> => {
    const realEstate = await realEstateRepository
    .createQueryBuilder("r")
    .leftJoinAndSelect("r.schedules", "s")
    .leftJoinAndSelect("s.user", "u")
    .leftJoinAndSelect("r.address", "a")
    .leftJoinAndSelect("r.category", "c")
    .where("r.id = :realEstateId", {realEstateId: realEstateId})
    .getOne()

    if (!realEstate) throw new AppError("RealEstate not found", 404)

    return realEstate
};

export default { create, retrieve };