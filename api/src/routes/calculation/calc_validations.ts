import * as Joi from 'joi';
export const warehouseId = Joi.object({
    warehouse_id: Joi.number().required()
});
