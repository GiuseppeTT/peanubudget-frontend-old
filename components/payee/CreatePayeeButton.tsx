import CreatePayeeModal from "@/components/payee/CreatePayeeModal";
import { useBinaryState } from "@/lib/utils";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreatePayeeButton() {
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
      <CreatePayeeModal isShowing={isShowing} onClose={setClose} />
    </>
  );
}
