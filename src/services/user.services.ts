import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepository.create(payload);
    await userRepository.save(user);

    return userReturnSchema.parse(user);
};

const read = async (admin: boolean): Promise<UserRead> => {
    if (admin) {
        const users: User[] = await userRepository.find({ withDeleted: true });
        
        return userReadSchema.parse(users);
    };

    return userReadSchema.parse(await userRepository.find());
};

const update = async (
    payload: UserUpdate,
    id: number
): Promise<UserReturn> => {
    const userFound: User | null = await userRepository.findOne({ where: {id: id}});

    const userUpdated: User = userRepository.create({
        ...userFound!,
        ...payload,
    });

    await userRepository.save(userUpdated);

    const user = userReturnSchema.parse(userUpdated);

    return user;
};

const destroy = async (user: User): Promise<void> => {
    await userRepository.softRemove(user);
};

export default { create, read, update, destroy };