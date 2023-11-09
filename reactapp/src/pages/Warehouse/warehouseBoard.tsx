

import { Grid } from "@mui/material";
import { useOperationQuery } from "../../utils/__autogen__/graphql";

import Card from "../../components/ui/Card";
interface whTblProps {
  whSelItem: number;
}
function Warehouse(props: whTblProps) {
  const { whSelItem } = props;
  const { data  } = useOperationQuery({
    variables: {
      warehouseId: whSelItem
    }
  });
  const boardVals = {
    wr_stock: data?.operation?.wr_stock?.toString() ?? "0",
    wr_availability: data?.operation?.wr_availability?.toString() ?? "0",
    wr_utilization: data?.operation?.wr_utilization?.toString() ?? "0",
  };
  
  
  return (
    <>
      {" "}
      {data && (
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Card title="Stock" message={boardVals.wr_stock} img="stock.png" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card title="Used" message={boardVals.wr_utilization} img="utilization.png" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card title="Available" message={boardVals.wr_availability} img="free.png" />
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default Warehouse;
