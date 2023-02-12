import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface PayeeFormProps {
  name: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PayeeForm({ name, handleNameChange }: PayeeFormProps) {
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
    </Box>
  );
}
