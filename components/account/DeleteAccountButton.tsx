import { deleteAccount, revalidateAccounts } from "@/lib/account";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface DeleteAccountButtonProps {
  selectedRowIds: GridRowId[];
}

export default function DeleteccountButton({
  selectedRowIds,
}: DeleteAccountButtonProps) {
  const handleDelete = async () => {
    if (selectedRowIds.length === 0) {
      return;
    }

    const promises = selectedRowIds.map((id: GridRowId) => deleteAccount(id));
    await Promise.all(promises);
    revalidateAccounts();
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
