export const ENUM_RISKS = ["HAZARDOUS","NON_HAZARDOUS"];
export const OPERATIONS = ["IMPORT","EXPORT"];
export const IS_EXPORT = "EXPORT";
export const ENUM_MOVEMENT_TYPE = {"EXPORT": "EXPORTED", "IMPORT":"IMPORTED"};
export const ACTIVE = "ACTIVE";
export const PRODUCT_HEADERS = [
    { field: "product_id", headerName: "ID", width: 70, sortable: true },
    { field: "product_name", headerName: "Product", width: 150 },
    { field: "size_per_unit", headerName: "Unit size", width: 100 },
    { field: "risk_type", headerName: "Risk", width: 150 }
  ];
  export const STOCK_WAREHAUSE_HEADERS = [
    { field: "movement_id", headerName: "ID", width: 70},
    { field: "product_name", headerName: "Product", width:150 },
    { field: "movement_type", headerName: "Movement", width: 150 },
    { field: "exp_imp_warehouse_id", headerName: "Exported to", width: 150 , sortable: true },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "units", headerName: "Units", width: 100 },
    { field: "movement_date", headerName: "Date", width: 200 , sortable: true }
  
  ];

