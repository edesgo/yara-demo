import React from "react";
import Box from "@mui/material/Box";
import {
  useGetProductsQuery,
  useCreateProductMutation,
} from "../../utils/__autogen__/graphql";
import { Container, Grid } from "@mui/material";
import Title from "../../components/ui/Title";
import DataTable from "../../components/ui/DataTable";
import LinearProgress from "@mui/material/LinearProgress";
import ProductForm from "./productForm";
import { PRODUCT_HEADERS } from "../../utils/constants";

const App = () => {
  const { data, loading, error, refetch } = useGetProductsQuery(); //Product Getter
  const DataColumns = PRODUCT_HEADERS;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setNewProdValues] = React.useState(null);
  const [createProductMutation] = useCreateProductMutation();  //Product Mutation
  const [isRefetching, setIsRefetching] = React.useState(false);

  async function getNewProductValues(val: any) { // Save new Product
    setNewProdValues(val);
    const newProd = await createProductMutation({
      variables: {
        input: {
          status: val.status,
          size_per_unit: Number(val.size_per_unit),
          risk_type: val.risk_type,
          product_name: val.product_name
        }
      }
    });
    
    if (newProd.data) {
      setIsRefetching(true);
      refetch().then(() => { // recall Product Getter and update Table
        setIsRefetching(false);
      });
    }
  }
  return (
    <Container fixed>
      <Box sx={{ height: "100%" }}>
        <Grid container spacing={1}>
          <ProductForm getVal={getNewProductValues} />

          <Grid item xs={12}>
            <Title type="h6" align="left" text="Products in system" />
          </Grid>
          <Grid item xs={10}>
          {isRefetching && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
            {loading && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
            {error && <div>Error occurred.</div>}
            {data && (
              <DataTable
                fieldId="product_id"
                columnsDT={DataColumns}
                rowsDT={data?.products ?? []}
                
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
