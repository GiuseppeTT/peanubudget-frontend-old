import { renderCurrencyCell } from "@/lib/data-grid";
import { TransactionOutput } from "@/lib/transaction";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "account",
    headerName: "Account",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "payee",
    headerName: "Payee",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "comment",
    headerName: "Comment",
    type: "string",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    flex: 1,
    minWidth: 200,
    renderCell: renderCurrencyCell,
  },
];

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
