import { Grid, Paper, styled } from "@mui/material";
import Title from "../../components/ui/Title";
import SelectInput from "../../components/ui/SelectInput";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

interface selWhItems {
  text: string;
  value: number | string;
}
interface whProps {
  whItems: selWhItems[];
  getWarehaouseSel: any;
  wareHouse: any;
}

export default function WarehouseForm(props: whProps) {
  const { whItems, getWarehaouseSel, wareHouse } = props;
  return (
    <>
      <div
        style={{
          paddingTop: "40px"
        }}
      ></div>
      <Grid item xs={12}>
        <Title type="h6" align="left" text="Select a warehause" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <SelectInput
            labelText="Warehause"
            hasError={false}
            selectItems={whItems}
            getVal={getWarehaouseSel}
            setVal={wareHouse}
          />
        </Item>
      </Grid>
  
      <div
        style={{
          paddingBottom: "40px"
        }}
      ></div>
    </>
  );
}
