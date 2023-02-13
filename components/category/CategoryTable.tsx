import { CategoryOutput } from "@/lib/category";
import { minWidth, pageSize, renderCurrencyCell } from "@/lib/data-grid";
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
    field: "budget",
    headerName: "Budget",
    type: "number",
    flex: 1,
    minWidth: minWidth,
    renderCell: renderCurrencyCell,
  },
  {
    field: "expenditure",
    headerName: "Expenditure",
    type: "number",
    flex: 1,
    minWidth: minWidth,
    renderCell: renderCurrencyCell,
  },
  {
    field: "available",
    headerName: "Available",
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

export interface CategoryTableProps {
  categories: CategoryOutput[];
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  selectedRowIds: GridRowId[];
  setSelectedRowIds: (newSelectedRowIds: GridRowId[]) => void;
}

export default function AccounTable({
  categories,
  error,
  isLoading,
  isValidating,
  selectedRowIds,
  setSelectedRowIds,
}: CategoryTableProps) {
  if (error) {
    alert("Error loading categories");
  }

  const handleSelectedRowIdsChange = (newSelectedRowIds: GridRowId[]) => {
    setSelectedRowIds(newSelectedRowIds);
  };

  return (
    <Box>
      <DataGrid
        loading={isLoading || isValidating}
        rows={categories}
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
