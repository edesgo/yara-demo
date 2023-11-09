import { GraphQLResolveInfo } from "graphql";
import { getWarehouses, getWarehouse, createWarehouse } from "../services/warehouse";

export const warehouseResolver = {
    Query: {
        async warehouses() {
            return await getWarehouses();
        },
        async warehouse(_: any, args: Record<string, any>) {
            return await getWarehouse(args.warehouse_id);
        },
    },
    Mutation: {
        async createWarehouse(_: any, { input }: Record<string, any>) {
            return await createWarehouse({
                warehouse_name: input.warehouse_name,
                max_stock_amount: input.max_stock_amount, 
                risk_type: input.risk_type, 
                status: input.status
            });
        }
    },
};
