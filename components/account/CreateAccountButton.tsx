import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreateAccountButton() {
  return (
    <Button variant="contained" color="success" startIcon={<AddIcon />}>
      Create
    </Button>
  );
}
