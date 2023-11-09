import { GraphQLResolveInfo } from "graphql";
import { getProducts, getProduct, createProduct } from "../services/product";

export const productResolver = {
    Query: {
        async products(){
            return await getProducts();
        },
        async product(_: any, args: Record<string, any>) {
            return await getProduct(args.product_id);
        },
    },
    Mutation: {
        async createProduct(_: any, { input }: Record<string, any>) {
            return await createProduct({
              product_name: input.product_name,
              size_per_unit: input.size_per_unit,
              risk_type: input.risk_type,
              status: input.status
            });
        }
    },
};
