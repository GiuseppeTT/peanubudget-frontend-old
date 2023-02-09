import CreateAccountModal from "@/components/account/CreateAccountModal";
import { useShow } from "@/lib/use";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function CreateAccountButton() {
  const [isShowing, show, close] = useShow();

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        onClick={show}
      >
        Create
      </Button>
      <CreateAccountModal isShowing={isShowing} onClose={close} />
    </>
  );
}
