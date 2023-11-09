import * as config from 'config';
import { warehouse } from './interface';
import { getValue, getValues } from '../../utils/db-services';
const DB_SCHEMA = config.get<string>('db.schema');
/**
 * Get all candidates to be app users
 * @param school_id
 * @param search
 * @returns
 */
export async function getWarehouseUtilisation(warehouse_id: warehouse) {
    return await getValues(`${DB_SCHEMA}.StockMovement`, '*', {
        warehouse_id
    });
}
/**
 * Get Warehouse max stock space
 * @param warehouse_id
 * @returns
 */
export async function getWarehouseMaxStock(warehouse_id: warehouse) {
    return await getValue(`${DB_SCHEMA}.Warehouse`, 'max_stock_amount', {
        warehouse_id
    });
}
