import { useAccounts } from "@/lib/account";
import { renderCurrencyCell } from "@/lib/data-grid";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "balance",
    headerName: "Balance",
    type: "number",
    flex: 1,
    minWidth: 200,
    renderCell: renderCurrencyCell,
  },
];

export default function AccounTable() {
  const { accounts, error, isLoading, isValidating } = useAccounts();

  if (error) {
    alert("Error loading accounts");
  }

  const rows = error || isLoading ? [] : accounts;

  return (
    <Box>
      <DataGrid
        loading={isLoading || isValidating}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight
        disableSelectionOnClick
        checkboxSelection
      />
    </Box>
  );
}
