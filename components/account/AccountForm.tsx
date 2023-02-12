import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface AccountFormProps {
  name: string;
  balance: number;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBalanceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AccountForm({
  name,
  balance,
  handleNameChange,
  handleBalanceChange,
}: AccountFormProps) {
  return (
    <Box component="form">
      <TextField
        required
        id="name"
        label="Name"
        type="string"
        value={name}
        onChange={handleNameChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="balance"
        label="Balance"
        type="number"
        value={balance}
        onChange={handleBalanceChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
