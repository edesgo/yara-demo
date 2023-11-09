import { PrismaClient, TypeRisk, TypeStatus } from "@prisma/client";

interface WarehouseInput {
    warehouse_name: string;
    max_stock_amount: number;
    risk_type: TypeRisk;
    status: TypeStatus;
}

const prisma = new PrismaClient();

export const getWarehouses = async () => {
    return await prisma.warehouse.findMany({ where: { NOT:{
        status:"DISABLED"
    } }, include:{ StockMovement: true , UserWarehouse: true} });
};

export const getWarehouse = async (warehouse_id:number) => {
    return await prisma.warehouse.findUnique({ where: { warehouse_id, NOT:{
        status:"DISABLED"
    } }, include:{ StockMovement: true, UserWarehouse: true } });
};

export const createWarehouse = async ({ warehouse_name, max_stock_amount, risk_type, status }: WarehouseInput) => {
    const createdWarehouse = await prisma.warehouse.create({
        data: {
            warehouse_name, 
            max_stock_amount, 
            risk_type, 
            status
        },
    });

    return createdWarehouse;
};
