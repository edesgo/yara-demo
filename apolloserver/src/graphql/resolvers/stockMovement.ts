import { GraphQLResolveInfo } from "graphql";
import {
  getStockMovements,
  getStockMovementsWarehouse,
  getStockMovementsProduct,
  importStockMovement,
  exportStockMovement
} from "../services/stockMovement";

export const stockMovementResolver = {
    Query: {
        async stockMovements() {
            return await getStockMovements();
        },
        async stockMovementWarehouse(_: any, args: Record<string, any>) {
            return await getStockMovementsWarehouse(args.warehouse_id );
        },
        async stockMovementProduct(_: any, args: Record<string, any>) {
            return await getStockMovementsProduct( args.product_id );
        },
    },
    Mutation: {
        async importStockMovement(_: any, { input }: Record<string, any>) {
            return await importStockMovement({
                warehouse_id: input.warehouse_id,
                exp_imp_warehouse_id: input.exp_imp_warehouse_id,
                product_id: input.product_id, 
                movement_type: input.movement_type, 
                units: input.units,
                amount: input.amount, 
                movement_date: input.movement_date, 
                status: input.status
            });
        },
        async exportStockMovement(_: any, { input }: Record<string, any>) {
            return await exportStockMovement({
                warehouse_id: input.warehouse_id,
                exp_imp_warehouse_id: input.exp_imp_warehouse_id,
                product_id: input.product_id, 
                movement_type: input.movement_type, 
                units: input.units,
                amount: input.amount, 
                movement_date: input.movement_date, 
                status: input.status
            });
        }
    },
};
