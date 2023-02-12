import CreateCategoryModal from "@/components/category/CreateCategoryModal";
import { useBinaryState } from "@/lib/utils";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreateCategoryButton() {
  const [isShowing, setShow, setClose] = useBinaryState(false);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        onClick={setShow}
      >
        Create
      </Button>
      <CreateCategoryModal isShowing={isShowing} onClose={setClose} />
    </>
  );
}
