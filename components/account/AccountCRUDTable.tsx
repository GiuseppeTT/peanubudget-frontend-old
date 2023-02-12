import AccountTable from "@/components/account/AccountTable";
import CreateAccountButton from "@/components/account/CreateAccountButton";
import DeleteAccountButton from "@/components/account/DeleteAccountButton";
import EditAccountButton from "@/components/account/EditAccountButton";
import { useAccounts } from "@/lib/account";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridRowId } from "@mui/x-data-grid";
import { useState } from "react";

export default function AccountCRUDTable() {
  const { accounts, error, isLoading, isValidating } = useAccounts();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1} justifyContent="flex-end" xs={12}>
          <Grid item xs="auto">
            <CreateAccountButton />
          </Grid>
          <Grid item xs="auto">
            <EditAccountButton
              accounts={accounts}
              selectedRowIds={selectedRowIds}
            />
          </Grid>
          <Grid item xs="auto">
            <DeleteAccountButton selectedRowIds={selectedRowIds} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AccountTable
            accounts={accounts}
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
