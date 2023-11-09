import { PrismaClient } from "@prisma/client";

interface UserWarehouseInput {
    user_id: number
    warehouse_id: number
}

const prisma = new PrismaClient();

export const getUserWarehouses = async () => {
    return await prisma.userWarehouse.findMany();
};

export const createUserWarehouse = async ({ user_id, warehouse_id }: UserWarehouseInput) => {
    const createdUserWarehouse = await prisma.userWarehouse.create({
        data: {
            user_id, 
            warehouse_id
        },
    });

    return createdUserWarehouse;
};
