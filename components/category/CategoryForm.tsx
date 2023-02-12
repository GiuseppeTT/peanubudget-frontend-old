import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface CategoryFormProps {
  name: string;
  budget: number;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBudgetChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CategoryForm({
  name,
  budget,
  handleNameChange,
  handleBudgetChange,
}: CategoryFormProps) {
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
        id="budget"
        label="Budget"
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
