import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export default function EditAccountButton() {
  return (
    <Button variant="contained" color="warning" startIcon={<EditIcon />}>
      Edit
    </Button>
  );
}
