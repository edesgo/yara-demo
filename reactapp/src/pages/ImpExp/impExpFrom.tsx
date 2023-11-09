import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Button, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import {
  useGetProdAndWerQuery,
  useOperationQuery
} from "../../utils/__autogen__/graphql";
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import Title from "../../components/ui/Title";
import DatePicker from "../../components/ui/DatePicker";
import { OPERATIONS, IS_EXPORT, ACTIVE } from "../../utils/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const actionTypes = OPERATIONS;
const selectItems = actionTypes.map((item) => {
  return { text: item, value: item };
});
interface impExpProps {
  getVal: any;
}

export default function ImpExpForm(props: impExpProps) {
  const { getVal } = props;

  const initValues = {
    product_id: 0,
    warehouse_id: 0,
    exp_imp_warehouse_id: 0,
    amount: 0,
    units: 0,
    movement_type: "",
    movement_date: "",
    status: ACTIVE
  };
  const initChangeOp = {
    product_id: 0,
    warehouse_id: 0,
    exp_imp_warehouse_id: 0,
    amount: 0,
    units: 0,
    status: ACTIVE
  };
  const initChangeWh = {
    product_id: 0,
    exp_imp_warehouse_id: 0,
    amount: 0,
    units: 0,
    status: ACTIVE
  };
  const initProds = [
    {
      text: "",
      value: 0
    }
  ];

  const [impExpValues, setImpExpValues] = React.useState(initValues);
  const [impExpProd, setImpExpProd] = React.useState(initProds);
  const [impExpDestWh, setImpExpDestWh] = React.useState(initProds);
  const [whAvail, setwhAvail] = React.useState("0");
  const [exportOP, setExpOP] = React.useState(false);
  const { data } = useGetProdAndWerQuery();
  const opVals = useOperationQuery({
    variables: {
      warehouseId: impExpValues.warehouse_id
    }
  });

  const dataProd = data?.products ?? [];
  const dataWh = data?.warehouses ?? [];
  const selectWh = dataWh.map((item) => ({
    text: item?.warehouse_name?.toString() ?? "",
    value: item?.warehouse_id ?? 0
  }));

  function getMovementVal(val: string) {
    setImpExpValues({ ...impExpValues, ...initChangeOp, movement_type: val });
    const isExport = val === IS_EXPORT ? true : false;
    setExpOP(isExport);
  }

  function getWhtVal(val: number) {
    setImpExpValues({ ...impExpValues, ...initChangeWh, warehouse_id: val });
    //get warehouse seltype
    const idxWh = dataWh.findIndex((itm) => itm?.warehouse_id === val);
    const risk_type = dataWh[idxWh]?.risk_type;
    const selectProd = dataProd
      .filter((itm) => itm?.risk_type === risk_type)
      .map((prod) => ({
        text: prod?.product_name || "",
        value: prod?.product_id || 0
      }));
    const selDestWh = dataWh
      .filter(
        (itm) => itm?.risk_type === risk_type && itm?.warehouse_id !== val
      )
      .map((wh) => ({
        text: wh?.warehouse_name || "",
        value: wh?.warehouse_id || 0
      }));
    setImpExpDestWh(selDestWh);
    setImpExpProd(selectProd);
  }
  function getProdVal(val: number) {
    //Update units
    const idxProd = dataProd.findIndex((itm) => itm?.product_id === val);
    const spUnit = dataProd[idxProd]?.size_per_unit ?? 0;
    const totUnits = spUnit * impExpValues.amount;
    setImpExpValues({ ...impExpValues, product_id: val, units: totUnits });
  }

  function getAmount(val: number) {
    const idxProd = dataProd.findIndex(
      (itm) => itm?.product_id === impExpValues.product_id
    );
    const spUnit = dataProd[idxProd]?.size_per_unit ?? 0;
    const totUnits = spUnit * val;
    setImpExpValues({ ...impExpValues, amount: val, units: totUnits });
  }

  function getWhDestVal(val: number) {
    setImpExpValues({ ...impExpValues, exp_imp_warehouse_id: val });
  }
  function getDatePicker(val: string) {
    setImpExpValues({ ...impExpValues, movement_date: val });
    console.log(val);
  }
  function fieldValidation(whAvaila: number) {
    let field = "";
    let isValid = true;
    if (impExpValues.movement_date === "" && isValid) {
      isValid = false;
      field = "Date";
    }
    if (impExpValues.movement_type === "" && isValid) {
      isValid = false;
      field = "Operation";
    }
    if (impExpValues.warehouse_id === 0 && isValid) {
      isValid = false;
      field = "Warehouse";
    }
    if (impExpValues.product_id === 0 && isValid) {
      isValid = false;
      field = "Product";
    }

    if (impExpValues.amount === 0 && isValid) {
      isValid = false;
      field = "Amount";
    }

    if (
      impExpValues.movement_type === IS_EXPORT &&
      impExpValues.exp_imp_warehouse_id === 0 &&
      isValid
    ) {
      isValid = false;
      field = "Destination Warehouse";
    }

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Missing fields...",
        text: `The Field ${field} is mandatory, please review it`
      });
      return false;
    }
  

    if (Number(impExpValues.amount) > Number(whAvaila)) {
      Swal.fire({
        icon: "error",
        title: "Not Enought space.",
        text: `This operation has ${impExpValues.amount} units, and Ware house has only  ${whAvaila} units available`
      });
      return false;
    }

    return true;
  }

  function update() {
    opVals.refetch();
    if (opVals.data) {
      const whAvaila =
        opVals.data?.operation?.wr_availability?.toString() ?? "0";
      setwhAvail(whAvaila.toString());

      if (fieldValidation(Number(whAvaila))) {
        getVal(impExpValues);
        setImpExpValues(initValues);
      }
      console.log(impExpValues);
    }
  }
  return (
    <>
      <div
        style={{
          paddingTop: "40px"
        }}
      ></div>
      <Grid item xs={12}>
        <Title type="h6" align="left" text="Import & Export" />
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <DatePicker getVal={getDatePicker} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <SelectInput
              labelText="Type of operation"
              hasError={false}
              selectItems={selectItems}
              getVal={getMovementVal}
              setVal={impExpValues.movement_type}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <SelectInput
              labelText="Warehouse"
              hasError={false}
              selectItems={selectWh}
              getVal={getWhtVal}
              setVal={impExpValues.warehouse_id}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <SelectInput
              labelText="Product"
              hasError={false}
              selectItems={impExpProd}
              getVal={getProdVal}
              setVal={impExpValues.product_id}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <TextInput
              labelText="Amount"
              hasError={false}
              getVal={getAmount}
              setVal={impExpValues.amount}
              number={true}
            />
          </Item>
        </Grid>
        {exportOP && (
          <Grid item xs={12} md={4}>
            <Item>
              <SelectInput
                labelText="Destination"
                hasError={false}
                selectItems={impExpDestWh}
                getVal={getWhDestVal}
                setVal={impExpValues.exp_imp_warehouse_id}
              />
            </Item>
          </Grid>
        )}
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack
          spacing={2}
          direction="row"
          style={{
            paddingTop: "20px"
          }}
        >
          <Button variant="contained" onClick={() => update()}>
            Add Product
          </Button>
        </Stack>
      </Grid>
      <div
        style={{
          paddingBottom: "100px"
        }}
      ></div>
    </>
  );
}
