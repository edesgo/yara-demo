import { IMPORTED, EXPORTED } from '../constants/calculation';
/**
 * Crate the detail information or the Warehouse Movements
 * @param stockMovement
 */
export async function warehouseCalculationDetails(stockMovement: any[]) {
    const utilization = 0;
    let imp = 0;
    let exp = 0;
    const newItem = stockMovement.map((record) => {
        record.movement_type == IMPORTED
            ? (imp = imp + record.amount)
            : (exp = exp + record.amount);
    });
    return imp - exp;
}
/**
 * Calculate available space left
 * @param stockMovement
 */
export async function warehouseAvailability(
    stock: number,
    utilization: number
) {
    return stock - utilization;
}
