import { renderCurrencyCell } from "@/lib/data-grid";
import { PayeeOutput } from "@/lib/payee";
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
    field: "expenditure",
    headerName: "Expenditure",
    type: "number",
    flex: 1,
    minWidth: 200,
    renderCell: renderCurrencyCell,
  },
];

export interface PayeeTableProps {
  payees: PayeeOutput[];
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  selectedRowIds: GridRowId[];
  setSelectedRowIds: (newSelectedRowIds: GridRowId[]) => void;
}

export default function AccounTable({
  payees,
  error,
  isLoading,
  isValidating,
  selectedRowIds,
  setSelectedRowIds,
}: PayeeTableProps) {
  if (error) {
    alert("Error loading payees");
  }

  const handleSelectedRowIdsChange = (newSelectedRowIds: GridRowId[]) => {
    setSelectedRowIds(newSelectedRowIds);
  };

  return (
    <Box>
      <DataGrid
        loading={isLoading || isValidating}
        rows={payees}
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
