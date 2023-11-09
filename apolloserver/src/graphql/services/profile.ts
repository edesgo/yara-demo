import { PrismaClient, TypeStatus } from "@prisma/client";

interface ProfileInput {
    profile:string
    status: TypeStatus
}

const prisma = new PrismaClient();

export const getProfiles = async () => {
    return await prisma.profile.findMany({ where: { NOT:{
        status:"DISABLED"
    } }, include:{ ProfileRight:true,  User:true} });
};

export const getProfile = async (profile_id:number) => {
    return await prisma.profile.findUnique({ where: { profile_id, NOT:{
        status:"DISABLED"
    } } ,include: { ProfileRight:true,  User:true}});
};

export const createProfile = async ({ profile, status }: ProfileInput) => {
    const createdProfile = await prisma.profile.create({
        data: {
            profile, 
            status
        },
    });

    return createdProfile;
};
