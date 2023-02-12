import { useAccounts } from "@/lib/account";
import { renderCurrencyCell } from "@/lib/data-grid";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";

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

export interface AccountTableProps {
  selectedRowIds: GridRowId[];
  setSelectedRowIds: (newSelectedRowIds: GridRowId[]) => void;
}

export default function AccounTable({
  selectedRowIds,
  setSelectedRowIds,
}: AccountTableProps) {
  const { accounts, error, isLoading, isValidating } = useAccounts();

  if (error) {
    alert("Error loading accounts");
  }

  const rows = error || isLoading ? [] : accounts;

  const handleSelectedRowIdsChange = (newSelectedRowIds: GridRowId[]) => {
    setSelectedRowIds(newSelectedRowIds);
  };

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
        selectionModel={selectedRowIds}
        onSelectionModelChange={handleSelectedRowIdsChange}
      />
    </Box>
  );
}
