import { getUsers, getUser, createUser } from "../services/user";

export const userResolver = {
    Query: {
        async users() {
            return await getUsers();
        },
        async user(_: any, args: Record<string, any>) {
            return await getUser(args.user_id);
        },
    },
    Mutation: {
        async createUser(_: any, { input }: Record<string, any>) {
            return await createUser({
                profile_id: input.profile_id,
                user_name: input.user_name, 
                email: input.email, 
                password: input.password,
                status: input.status
            });
        }
    },
};
