import { deleteTransaction, revalidateTransactions } from "@/lib/transaction";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface DeleteTransactionButtonProps {
  selectedRowIds: GridRowId[];
}

export default function DeleteccountButton({
  selectedRowIds,
}: DeleteTransactionButtonProps) {
  const handleDelete = async () => {
    if (selectedRowIds.length === 0) {
      return;
    }

    const promises = selectedRowIds.map((id: GridRowId) =>
      deleteTransaction(id)
    );
    await Promise.all(promises);
    revalidateTransactions();
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
