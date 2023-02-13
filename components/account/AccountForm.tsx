import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface AccountFormProps {
  name: string;
  balance: number;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBalanceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AccountForm({
  name,
  balance,
  onNameChange,
  onBalanceChange,
}: AccountFormProps) {
  return (
    <Box component="form">
      <TextField
        required
        id="name"
        label="Name"
        type="string"
        value={name}
        onChange={onNameChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="balance"
        label="Balance"
        type="number"
        value={balance}
        onChange={onBalanceChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
