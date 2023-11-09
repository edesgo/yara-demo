import { PrismaClient, TypeRisk, TypeStatus } from "@prisma/client";

interface ProductInput {
    product_name: string;
    size_per_unit: number;
    risk_type: TypeRisk;
    status: TypeStatus;
}

const prisma = new PrismaClient();

export const getProducts = async () => {
    return await prisma.product.findMany({ where: { NOT:{
        status:"DISABLED"
    } }, include:{ StockMovement:true } });
};

export const getProduct = async (product_id: number) => {
    return await prisma.product.findUnique({ where: { product_id, NOT:{
        status:"DISABLED"
    } } ,include: { StockMovement: true}});
};

export const createProduct = async ({ product_name, size_per_unit, risk_type, status }: ProductInput) => {
    const createdProduct = await prisma.product.create({
        data: {
            product_name, 
            size_per_unit, 
            risk_type, 
            status
        },
    });

    return createdProduct;
};
