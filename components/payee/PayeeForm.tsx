import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface PayeeFormProps {
  name: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PayeeForm({ name, onNameChange }: PayeeFormProps) {
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
    </Box>
  );
}
