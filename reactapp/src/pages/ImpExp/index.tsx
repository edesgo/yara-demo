import React from "react";
import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material";
import { IS_EXPORT } from "../../utils/constants";
import ImpExpform from "./impExpFrom";
import {
    TypeMovement
  } from "../../utils/__autogen__/graphql";
import {
  useCreateStocklExporttMutation,
  useCreateStocklImportMutation
} from "../../utils/__autogen__/graphql";
import Swal from "sweetalert2";
import dayjs from "dayjs";

function ImpExp() {
  const [_, setNewStockVals] = React.useState(null);
  const [createStockExport] = useCreateStocklExporttMutation(); 
  const [createStockImport] = useCreateStocklImportMutation(); 
  async function saveMovement(val: any) {
    setNewStockVals(val);

    if (val.movement_type === IS_EXPORT) {
         await createStockExport({
            variables: {
              input: {
                product_id: val.product_id,
                warehouse_id: val.warehouse_id,
                exp_imp_warehouse_id: val.exp_imp_warehouse_id,
                amount: Number(val.amount),
                units: val.units,
                movement_type: TypeMovement.Exported,
                movement_date: dayjs(val.movement_date).toISOString(),
                status: val.status
              }
            }
          });

    } else {
        await createStockImport({
            variables: {
              input: {
                product_id: val.product_id,
                warehouse_id: val.warehouse_id,
                amount: Number(val.amount),
                units: val.units,
                movement_type: TypeMovement.Imported,
                movement_date: dayjs(val.movement_date).toISOString(),
                status: val.status
              }
            }
          });
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
          
        }
      });
      Toast.fire({
        icon: "success",
        title: "Record saved successfully"
      });

  }

  return (
    <Container fixed>
      <Box sx={{ height: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ImpExpform getVal={saveMovement} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ImpExp;
