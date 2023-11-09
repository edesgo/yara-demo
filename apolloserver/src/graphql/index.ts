
import { readFileSync } from "fs";
import path from "path";
import { productResolver } from "./resolvers/product";
import { warehouseResolver } from "./resolvers/warehouse";
import { stockMovementResolver } from "./resolvers/stockMovement";
import { userResolver } from "./resolvers/user";
import { userWarehouseResolver } from "./resolvers/userWarehouse";
import { profileResolver } from "./resolvers/profile";
import { profileRightResolver } from "./resolvers/profileRight";
import { operationResolver } from "./resolvers/operations";

import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

const enumTypes = readFileSync(path.join(__dirname, "./typeDefs/enum.graphql"), {
    encoding: "utf-8",
});
const productTypes = readFileSync(path.join(__dirname, "./typeDefs/product.graphql"), {
    encoding: "utf-8",
});
const warehouseTypes = readFileSync(path.join(__dirname, "./typeDefs/warehouse.graphql"), {
    encoding: "utf-8",
});
const stockMovementTypes = readFileSync(path.join(__dirname, "./typeDefs/stockMovement.graphql"), {
    encoding: "utf-8",
});
const userTypes = readFileSync(path.join(__dirname, "./typeDefs/user.graphql"), {
    encoding: "utf-8",
});
const profileTypes = readFileSync(path.join(__dirname, "./typeDefs/profile.graphql"), {
    encoding: "utf-8",
});
const profileRightTypes = readFileSync(path.join(__dirname, "./typeDefs/profileRight.graphql"), {
    encoding: "utf-8",
});
const userWarehouseTypes = readFileSync(path.join(__dirname, "./typeDefs/userWarehouse.graphql"), {
    encoding: "utf-8",
});
const operationTypes = readFileSync(path.join(__dirname, "./typeDefs/operation.graphql"), {
    encoding: "utf-8",
});

export const typeDefs = `
    ${scalarTypeDefs}
    ${enumTypes}
    ${productTypes}
    ${warehouseTypes}
    ${stockMovementTypes}
    ${userTypes}
    ${profileTypes}
    ${profileRightTypes}
    ${userWarehouseTypes}
    ${operationTypes}
`;

export const resolvers = {
    Query: {
        ...productResolver.Query,
        ...warehouseResolver.Query,
        ...stockMovementResolver.Query,
        ...userResolver.Query,
        ...userWarehouseResolver.Query,
        ...profileResolver.Query,
        ...profileRightResolver.Query,
        ...operationResolver.Query
    },
    Mutation: {
        ...productResolver.Mutation,
        ...warehouseResolver.Mutation,
        ...stockMovementResolver.Mutation,
        ...userResolver.Mutation,
        ...userWarehouseResolver.Mutation,
        ...profileResolver.Mutation,
        ...profileRightResolver.Mutation
    },
};



