import { AccountOutput } from "@/lib/account";
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
  accounts: AccountOutput[];
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  selectedRowIds: GridRowId[];
  setSelectedRowIds: (newSelectedRowIds: GridRowId[]) => void;
}

export default function AccounTable({
  accounts,
  error,
  isLoading,
  isValidating,
  selectedRowIds,
  setSelectedRowIds,
}: AccountTableProps) {
  if (error) {
    alert("Error loading accounts");
  }

  const handleSelectedRowIdsChange = (newSelectedRowIds: GridRowId[]) => {
    setSelectedRowIds(newSelectedRowIds);
  };

  return (
    <Box>
      <DataGrid
        loading={isLoading || isValidating}
        rows={accounts}
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
