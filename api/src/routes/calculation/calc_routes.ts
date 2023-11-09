import { Request, ServerRoute } from '@hapi/hapi';
import * as calcAct from './calc_actions';
import * as calcVal from './calc_validations';

//Get customer that belongs for the logged user
const calcRoutes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/calculations/{warehouse_id}',
        handler: async (request: Request, h) => {
            const getCalcDetails = await calcAct.actGetWarehouseDetails(
                request.params['warehouse_id']
            );
            return getCalcDetails;
        },
        options: {
            validate: {
                params: calcVal.warehouseId,
                failAction: (request, h, err) => {
                    throw err;
                }
            },
            auth: 'jwt',
            description: 'Get Calculations values',
            notes: 'Get Calculations',
            tags: ['api', 'calculations']
        }
    }
];
export default calcRoutes;
