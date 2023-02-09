import EditAccountModal from "@/components/account/EditAccountModal";
import { useShow } from "@/lib/use";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export default function EditAccountButton() {
  const [isShowing, show, close] = useShow();

  return (
    <>
      <Button
        variant="contained"
        color="warning"
        startIcon={<EditIcon />}
        onClick={show}
      >
        Edit
      </Button>
      <EditAccountModal isShowing={isShowing} onClose={close} />
    </>
  );
}
