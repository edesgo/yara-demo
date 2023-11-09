import { getProfiles, getProfile, createProfile } from "../services/profile";

export const profileResolver = {
    Query: {
        async profiles() {
            return await getProfiles();
        },
        async profile(_: any, args: Record<string, any>) {
            return await getProfile(args.profile_id);
        },
    },
    Mutation: {
        async createProfile(_: any, { input }: Record<string, any>) {
            return await createProfile({
              profile: input.profile,
              status: input.status
            });
        }
    },
};
