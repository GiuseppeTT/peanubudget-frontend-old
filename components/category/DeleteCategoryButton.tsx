import { deleteCategory, revalidateCategories } from "@/lib/category";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface DeleteCategoryButtonProps {
  selectedRowIds: GridRowId[];
}

export default function DeleteccountButton({
  selectedRowIds,
}: DeleteCategoryButtonProps) {
  const handleDelete = async () => {
    if (selectedRowIds.length === 0) {
      return;
    }

    const promises = selectedRowIds.map((id: GridRowId) => deleteCategory(id));
    await Promise.all(promises);
    revalidateCategories();
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
