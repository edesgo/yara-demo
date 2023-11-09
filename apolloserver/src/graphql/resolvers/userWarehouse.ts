import { getUserWarehouses, createUserWarehouse } from "../services/userWarehouse";

export const userWarehouseResolver = {
    Query: {
        async userWarehouses() {
            return await getUserWarehouses();
        },
    },
    Mutation: {
        async createUserWarehouse(_: any, { input }: Record<string, any>) {
            return await createUserWarehouse({
                user_id: input.user_id,
                warehouse_id: input.warehouse_id
            });
        }
    },
};
