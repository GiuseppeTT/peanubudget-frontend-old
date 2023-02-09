import DownloadAccountError from "@/components/account/DownloadAccountError";
import { useAccounts } from "@/lib/account";
import { renderCurrencyCell } from "@/lib/renderCell";
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
  const { accounts, error, isLoading } = useAccounts();

  if (error) {
    return <DownloadAccountError />;
  }

  const rows = isLoading ? [] : accounts;

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
