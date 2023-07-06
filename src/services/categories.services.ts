import { Category } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate } from "../interfaces";
import { categoriesRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
    const category: Category = categoriesRepository.create(payload);
    await categoriesRepository.save(category);

    return category;
}

const read = async (): Promise<Category[]> => {
    const categories: Category[] | null = await categoriesRepository.find();
    return categories;
};

const retrieve = async (categoryId: number): Promise<Category> => {
    const categoryFound: Category | null = await categoriesRepository.findOne({
        where: { id: categoryId },
        relations: { realEstate: true },
    })

    if (!categoryFound) {
        throw new AppError("Category not found", 404)
    };

    return categoryFound;
};

export default { create, read, retrieve };