import { PrismaClient, TypeStatus } from "@prisma/client";

interface UserInput {
    profile_id: number
    user_name: string
    email: string
    password: string
    status: TypeStatus;
}

const prisma = new PrismaClient();

export const getUsers = async () => {
    return await prisma.user.findMany({ where: { NOT:{
        status:"DISABLED"
    } } });
};

export const getUser = async ( user_id:number) => {
    return await prisma.user.findUnique({ where: { user_id, NOT:{
        status:"DISABLED"
    } } });
};

export const createUser = async ({ profile_id, user_name, email, password, status }: UserInput) => {
    const createdUser = await prisma.user.create({
        data: {
            profile_id, 
            user_name, 
            email,
            password, 
            status
        },
    });

    return createdUser;
};
