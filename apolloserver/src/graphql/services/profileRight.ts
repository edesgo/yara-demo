import { PrismaClient } from "@prisma/client";

interface ProfileRightInput {
    warehouse: number
    product: number
}

const prisma = new PrismaClient();

export const getProfileRights = async () => {
    return await prisma.profileRight.findMany();
};

export const getProfileRight = async (profile_id: number) => {
    return await prisma.profileRight.findUnique({ where: { profile_id
    } });
};

export const createProfileRight = async ({ warehouse, product }: ProfileRightInput) => {
    const createdProfileRight = await prisma.profileRight.create({
        data: {
            warehouse, 
            product
        },
    });

    return createdProfileRight;
};
