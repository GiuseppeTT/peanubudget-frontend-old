import CreateAccountModal from "@/components/account/CreateAccountModal";
import { useBinaryState } from "@/lib/utils";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreateAccountButton() {
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
      <CreateAccountModal isShowing={isShowing} onClose={setClose} />
    </>
  );
}
