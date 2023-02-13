import { deletePayee, revalidatePayees } from "@/lib/payee";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface DeletePayeeButtonProps {
  selectedRowIds: GridRowId[];
}

export default function DeleteccountButton({
  selectedRowIds,
}: DeletePayeeButtonProps) {
  const handleDelete = async () => {
    if (selectedRowIds.length === 0) {
      return;
    }

    const promises = selectedRowIds.map((id: GridRowId) => deletePayee(id));
    await Promise.all(promises);
    revalidatePayees();
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}
