import { minWidth, pageSize, renderCurrencyCell } from "@/lib/data-grid";
import { PayeeOutput } from "@/lib/payee";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    type: "string",
    flex: 1,
    minWidth: minWidth,
  },
  {
    field: "expenditure",
    headerName: "Expenditure",
    type: "number",
    flex: 1,
    minWidth: minWidth,
    renderCell: renderCurrencyCell,
  },
];

const initialState: GridInitialStateCommunity = {
  sorting: {
    sortModel: [{ field: "name", sort: "asc" }],
  },
};

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
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        initialState={initialState}
        autoHeight
        disableSelectionOnClick
        checkboxSelection
        selectionModel={selectedRowIds}
        onSelectionModelChange={handleSelectedRowIdsChange}
      />
    </Box>
  );
}
