import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function DeleteccountButton() {
  return (
    <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
}
