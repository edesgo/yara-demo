import { PrismaClient, TypeMovement, TypeStatus } from "@prisma/client";

interface StockMovementInput {
    warehouse_id: number
    exp_imp_warehouse_id: number
    product_id: number
    movement_type: TypeMovement
    units: number
    amount: number
    movement_date: string
    status: TypeStatus
}

const prisma = new PrismaClient();

export const getStockMovements = async () => {
    return await prisma.stockMovement.findMany({
        where: {
            NOT: {
                status: "DISABLED"
            }
        }, include: {
            products_table: true,
        },
    });
};

export const getStockMovementsWarehouse = async (warehouse_id: number) => {
    return await prisma.stockMovement.findMany({
        where: {
            warehouse_id, NOT: {
                status: "DISABLED"
            }
        }, include: {
            products_table: true,
        },
    });
};

export const getStockMovementsProduct = async (product_id: number) => {
    return await prisma.stockMovement.findMany({
        where: {
            product_id, NOT: {
                status: "DISABLED"
            }
        }, include: {
            products_table: true,
        },
    });
};


export const importStockMovement = async ({ warehouse_id, product_id, units, amount, movement_date, status }: StockMovementInput) => {
    const importedStockMovement = await prisma.stockMovement.create({
        data: {
            warehouse_id,
            product_id,
            movement_type: "IMPORTED",
            units,
            amount,
            movement_date,
            status
        },
    });

    return importedStockMovement;
};

export const exportStockMovement = async ({ warehouse_id, exp_imp_warehouse_id, product_id, units, amount, movement_date, status }: StockMovementInput) => {
    const exportedStockMovement = await prisma.stockMovement.create({
        data: {
            exp_imp_warehouse_id: warehouse_id,
            warehouse_id: exp_imp_warehouse_id,
            product_id,
            movement_type: "EXPORTED",
            units,
            amount,
            movement_date,
            status
        },
    });
    const importedStockMovement = await prisma.stockMovement.create({
        data: {
            warehouse_id, //destiny
            exp_imp_warehouse_id, //comming
            product_id,
            movement_type: "IMPORTED",
            units,
            amount,
            movement_date,
            status
        },
    });

    return exportedStockMovement;
};
