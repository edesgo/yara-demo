import { GraphQLResolveInfo } from "graphql";
import { getProfileRights, getProfileRight, createProfileRight } from "../services/profileRight";

export const profileRightResolver = {
    Query: {
        async profileRights() {
            return await getProfileRights();
        },
        async profileRight(_: any, args: Record<string, any>) {
            return await getProfileRight(args.profile_id);
        },
    },
    Mutation: {
        async createProfile(_: any, { input }: Record<string, any>) {
            return await createProfileRight({
                warehouse: input.warehouse,
                product: input.product
            });
        }
    },
};
