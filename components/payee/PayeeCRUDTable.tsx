import CreatePayeeButton from "@/components/payee/CreatePayeeButton";
import DeletePayeeButton from "@/components/payee/DeletePayeeButton";
import EditPayeeButton from "@/components/payee/EditPayeeButton";
import PayeeTable from "@/components/payee/PayeeTable";
import { usePayees } from "@/lib/payee";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridRowId } from "@mui/x-data-grid";
import { useState } from "react";

export default function PayeeCRUDTable() {
  const { payees, error, isLoading, isValidating } = usePayees();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1} justifyContent="flex-end" xs={12}>
          <Grid item xs="auto">
            <CreatePayeeButton />
          </Grid>
          <Grid item xs="auto">
            <EditPayeeButton payees={payees} selectedRowIds={selectedRowIds} />
          </Grid>
          <Grid item xs="auto">
            <DeletePayeeButton selectedRowIds={selectedRowIds} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PayeeTable
            payees={payees}
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
