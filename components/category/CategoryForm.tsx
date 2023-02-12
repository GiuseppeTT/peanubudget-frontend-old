import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface CategoryFormProps {
  name: string;
  budget: number;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBudgetChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CategoryForm({
  name,
  budget,
  onNameChange,
  onBudgetChange,
}: CategoryFormProps) {
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
        id="budget"
        label="Budget"
        type="number"
        value={budget}
        onChange={onBudgetChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
