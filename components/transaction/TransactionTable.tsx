import {
  minWidth,
  pageSize,
  renderCurrencyCell,
  renderDateCell,
} from "@/lib/data-grid";
import { TransactionOutput } from "@/lib/transaction";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { GridInitialStateCommunity } from "@mui/x-data-grid/models/gridStateCommunity";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    type: "date",
    flex: 1,
    minWidth: minWidth,
    renderCell: renderDateCell,
  },
  {
    field: "account",
    headerName: "Account",
    type: "string",
    flex: 1,
    minWidth: minWidth,
  },
  {
    field: "payee",
    headerName: "Payee",
    type: "string",
    flex: 1,
    minWidth: minWidth,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    flex: 1,
    minWidth: minWidth,
  },
  {
    field: "comment",
    headerName: "Comment",
    type: "string",
    flex: 1,
    minWidth: minWidth,
  },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    flex: 1,
    minWidth: minWidth,
    renderCell: renderCurrencyCell,
  },
];

const initialState: GridInitialStateCommunity = {
  sorting: {
    sortModel: [{ field: "date", sort: "desc" }],
  },
};

export interface TransactionTableProps {
  transactions: TransactionOutput[];
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  selectedRowIds: GridRowId[];
  setSelectedRowIds: (newSelectedRowIds: GridRowId[]) => void;
}

export default function AccounTable({
  transactions,
  error,
  isLoading,
  isValidating,
  selectedRowIds,
  setSelectedRowIds,
}: TransactionTableProps) {
  if (error) {
    alert("Error loading transactions");
  }

  const handleSelectedRowIdsChange = (newSelectedRowIds: GridRowId[]) => {
    setSelectedRowIds(newSelectedRowIds);
  };

  return (
    <Box>
      <DataGrid
        loading={isLoading || isValidating}
        rows={transactions}
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
