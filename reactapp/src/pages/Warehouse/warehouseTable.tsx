import { Grid, LinearProgress, Box } from "@mui/material";
import dayjs from "dayjs";
import Title from "../../components/ui/Title";
import DataTable from "../../components/ui/DataTable";
import { STOCK_WAREHAUSE_HEADERS } from "../../utils/constants";

import { useGetStockMovementWarehouseQuery, useGetWarehousesQuery } from "../../utils/__autogen__/graphql";
interface whTblProps {
  whSelItem: number;
}
export default function WarehouseTable(props: whTblProps) {
  const { whSelItem } = props;
  const whItems = useGetWarehousesQuery();
  const dataWh = whItems.data?.warehouses ?? [];
  const { data, loading, error } = useGetStockMovementWarehouseQuery({
    variables: {
      warehouseId: whSelItem
    }
  }); //Warehause Getter
  const tableColumns = STOCK_WAREHAUSE_HEADERS;
  const dataValues = data?.stockMovementWarehouse ?? [];
  const tableVals = dataValues.map((item)=>({
    movement_id: item?.movement_id,
    product_name: item?.products_table?.product_name,
    exp_imp_warehouse_id: (item?.movement_type === "EXPORTED") ? getWhName(Number(item?.exp_imp_warehouse_id)) : "",
    movement_type: item?.movement_type,
    amount: item?.amount,
    units: item?.units,
    movement_date: dayjs(item?.movement_date).format("YYYY-MM-DD hh:mm") 
  }));
  function getWhName(warehouse_id: number){
    const idxWh = dataWh.findIndex((itm) => itm?.warehouse_id === warehouse_id);
    return dataWh[idxWh]?.warehouse_name;
  }

  return (
    <>
      <div
        style={{
          paddingTop: "40px"
        }}
      ></div>
      <Grid item xs={12}>
        <Title type="h6" align="left" text="Products in Warehouse" />
      </Grid>
      <Grid item xs={10}>
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        {error && <div>Error occurred.</div>}
        {data && (
          <DataTable
            fieldId="movement_id"
            columnsDT={tableColumns}
            rowsDT={tableVals}
          />
        )}
      </Grid>

      <div
        style={{
          paddingBottom: "100px"
        }}
      ></div>
    </>
  );
}
