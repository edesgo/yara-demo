import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";

  interface DataTableProps {
    columnsDT: GridColDef[];
    rowsDT: any[];
    fieldId: string;
  }

export default function DataTable(props: DataTableProps) {
  const {columnsDT,rowsDT,fieldId} = props
    const sortModelVals: GridSortModel = [{
        field: props.fieldId,
        sort: 'asc'
      }];
  return (
    <div >
      <DataGrid
        rows={rowsDT}
        columns={columnsDT}
        getRowId={(row: any) =>  row[fieldId]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        sortModel={sortModelVals}

      />
    </div>
  );
}
