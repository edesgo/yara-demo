import React from "react";
import { Grid, Container, Box } from "@mui/material";
import { useGetWarehousesQuery } from "../../utils/__autogen__/graphql";
import WarehouseForm from "./warehouseForm";
import WarehouseTable from "./warehouseTable";
import WarehouseBoard from "./warehouseBoard";

function Warehouse() {
  const [wareHouse, setWareHouse] = React.useState(1);
  const { data, loading, error } = useGetWarehousesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  // Manipulate the data to generate the desired array
  const selectItems = data?.warehouses
    ? data.warehouses
        .filter(
          (warehouse) =>
            warehouse !== null && warehouse.__typename === "Warehouse"
        )
        .map((warehouse) => ({
          text: warehouse?.warehouse_name || "",
          value: warehouse?.warehouse_id || 0
        }))
    : [];

  function getWarehaouseSel(val: number) {
    setWareHouse(val);
  }

  return (
    <Container fixed>
      <Box sx={{ height: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <WarehouseForm
              whItems={selectItems}
              getWarehaouseSel={getWarehaouseSel}
              wareHouse={wareHouse}
            />
          </Grid>
          <Grid item xs={12}>
            <WarehouseBoard whSelItem={wareHouse}/>
          </Grid>

          <Grid item xs={12}>
            <WarehouseTable whSelItem={wareHouse} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default Warehouse;
