import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Swal from 'sweetalert2'
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import Title from "../../components/ui/Title";
import { ENUM_RISKS } from "../../utils/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const enumTypes = ENUM_RISKS;
const selectItems = enumTypes.map((item) => {
  return { text: item, value: item };
});

interface prodProps {
    getVal: any; 
  }

export default function ProductForm(props: prodProps) {
    const {getVal} = props
  const initValues = {
    product_name: "",
    size_per_unit: 0,
    risk_type: "",
    status: "ACTIVE"
  };
  const [prodValues, setProdValues] = React.useState(initValues);

  function getProductName(val: string) {
    setProdValues({ ...prodValues, product_name: val });
  }
  function getProductSize(val: number) {
    setProdValues({ ...prodValues, size_per_unit: val });
  }
  function getProductRisk(val: string) {
    setProdValues({ ...prodValues, risk_type: val });
  }

  function saveProd() {
    if (fieldValidation()) {
      getVal(prodValues);
      setProdValues(initValues);
    }
  }

  function fieldValidation() {
    let isValid = true;
    if (
      prodValues.product_name === "" ||
      prodValues.size_per_unit === 0 ||
      prodValues.risk_type === ""
    ) {
      isValid = false;
    }

    if (!isValid) {

        Swal.fire({
            icon: "error",
            title: "Missing fields...",
            text: "Please review the missing fields and try again!"
          });
      return false;
    }
    return true;
  }

  return (
    <>
      <div
        style={{
          paddingTop: "40px"
        }}
      ></div>
      <Grid item xs={12}>
        <Title type="h6" align="left" text="Add a new product" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <TextInput
            labelText="Product name"
            hasError={false}
            getVal={getProductName}
            setVal={prodValues.product_name}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <TextInput
            labelText="Size per unit"
            hasError={false}
            getVal={getProductSize}
            setVal={prodValues.size_per_unit}
            number={true}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <SelectInput
            labelText="Type of risk"
            hasError={false}
            selectItems={selectItems}
            getVal={getProductRisk}
            setVal={prodValues.risk_type}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack
          spacing={2}
          direction="row"
          style={{
            paddingTop: "10px"
          }}
        >
          <Button variant="contained" onClick={saveProd}>
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
