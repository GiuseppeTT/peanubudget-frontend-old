import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AccountForm() {
  return (
    <Box component="form">
      <TextField
        required
        margin="dense"
        id="name"
        label="Name"
        type="string"
        fullWidth
      />
      <TextField
        required
        margin="dense"
        id="balance"
        label="Balance"
        type="number"
        fullWidth
      />
    </Box>
  );
}
