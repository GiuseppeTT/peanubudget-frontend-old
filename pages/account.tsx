import AccountTable from "@/components/account/AccountTable";
import CreateAccountButton from "@/components/account/CreateAccountButton";
import DeleteAccountButton from "@/components/account/DeleteAccountButton";
import EditAccountButton from "@/components/account/EditAccountButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function AccountPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1} justifyContent="flex-end" xs={12}>
          <Grid item xs="auto">
            <CreateAccountButton />
          </Grid>
          <Grid item xs="auto">
            <EditAccountButton />
          </Grid>
          <Grid item xs="auto">
            <DeleteAccountButton />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AccountTable />
        </Grid>
      </Grid>
    </Box>
  );
}
