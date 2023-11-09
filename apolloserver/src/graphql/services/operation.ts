import { issueToken } from "../utils/jwt.service";
import axios from 'axios';
const tknKey = process.env.API_JWT_SECRET || "";

export const GetWarehouseDetails = async (warehouse_id: number) => {
    const url = `${process.env.API_URL}/calculations/${warehouse_id}`;
    const tkn = await issueToken(tknKey);
    const config = {
        method:'get',
        url,
        headers: {'Authorization': tkn }
    } 
    return await axios(config)
        .then((response) => {
            return response.data;
        })
        .catch(function (error) {
            return [];
        });
};

