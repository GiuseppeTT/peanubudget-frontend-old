import EditCategoryModal from "@/components/category/EditCategoryModal";
import { CategoryOutput, defaultCategoryOutput } from "@/lib/category";
import { useBinaryState } from "@/lib/utils";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface EditCategoryButtonProps {
  categories: CategoryOutput[];
  selectedRowIds: GridRowId[];
}

export default function EditCategoryButton({
  categories,
  selectedRowIds,
}: EditCategoryButtonProps) {
  const [isShowing, setShow, setClose] = useBinaryState(false);

  const handleShow = () => {
    if (selectedRowIds.length === 0) {
      return;
    } else if (selectedRowIds.length === 1) {
      setShow();
    } else {
      alert("You can only edit one category at a time.");
    }
  };

  const category =
    categories.find((category) => category.id === selectedRowIds[0]) ??
    defaultCategoryOutput;

  return (
    <>
      <Button
        variant="contained"
        color="warning"
        startIcon={<EditIcon />}
        onClick={handleShow}
      >
        Edit
      </Button>
      <EditCategoryModal
        category={category}
        isShowing={isShowing}
        onClose={setClose}
      />
    </>
  );
}
