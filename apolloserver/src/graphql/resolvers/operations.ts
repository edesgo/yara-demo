import { GetWarehouseDetails } from "../services/operation";
export const operationResolver = {
    Query: {
        async operation(_: any, args: Record<string, any>) {
            return await GetWarehouseDetails(args.warehouse_id);
        },
    }
};
