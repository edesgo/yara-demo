import Product from "../Product";
import Warehouse from "../Warehouse";
import ImpExp from "../ImpExp";
import Layout from "../../components/ui/Layout";

const itemsMenu = [
  { text: "Products", component: <Product /> },
  { text: "Warehouse", component: <Warehouse /> },
  { text: "Import & Export", component: <ImpExp /> }
];

function App() {
  return <Layout itemsMenu={itemsMenu} />;
}

export default App;
