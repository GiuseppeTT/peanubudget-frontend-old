import CreateTransactionModal from "@/components/transaction/CreateTransactionModal";
import { useBinaryState } from "@/lib/utils";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreateTransactionButton() {
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
      <CreateTransactionModal isShowing={isShowing} onClose={setClose} />
    </>
  );
}
