import CreateTransactionButton from "@/components/transaction/CreateTransactionButton";
import DeleteTransactionButton from "@/components/transaction/DeleteTransactionButton";
import EditTransactionButton from "@/components/transaction/EditTransactionButton";
import TransactionTable from "@/components/transaction/TransactionTable";
import { useTransactions } from "@/lib/transaction";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridRowId } from "@mui/x-data-grid";
import { useState } from "react";

export default function TransactionCRUDTable() {
  const { transactions, error, isLoading, isValidating } = useTransactions();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1} justifyContent="flex-end" xs={12}>
          <Grid item xs="auto">
            <CreateTransactionButton />
          </Grid>
          <Grid item xs="auto">
            <EditTransactionButton
              transactions={transactions}
              selectedRowIds={selectedRowIds}
            />
          </Grid>
          <Grid item xs="auto">
            <DeleteTransactionButton selectedRowIds={selectedRowIds} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TransactionTable
            transactions={transactions}
            error={error}
            isLoading={isLoading}
            isValidating={isValidating}
            selectedRowIds={selectedRowIds}
            setSelectedRowIds={setSelectedRowIds}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
