import * as Boom from 'boom';
import {
    getWarehouseUtilisation,
    getWarehouseMaxStock
} from '../../models/calculations/model';
import { warehouse } from '../../models/calculations/interface';
import {
    warehouseCalculationDetails,
    warehouseAvailability
} from '../../utils/calculation.service';
/**
 * Get calculation details info
 * @param warehouse_id
 * @returns Obj with CalculationDetail: wr_stock, wr_utilization, wr_availability
 */
export async function actGetWarehouseDetails(warehouse_values: warehouse) {
    const warehouseDetails = await getWarehouseUtilisation(warehouse_values);
    if (warehouseDetails.length > 0) {
        const wr_utilization = await warehouseCalculationDetails(
            warehouseDetails
        );
        const wr_stock = await getWarehouseMaxStock(warehouse_values);
        const wr_availability = await warehouseAvailability(
            wr_stock.max_stock_amount,
            wr_utilization
        );
        return {
            wr_utilization,
            wr_stock: wr_stock.max_stock_amount,
            wr_availability
        };
    }
    return Boom.notFound('No records were found');
}
