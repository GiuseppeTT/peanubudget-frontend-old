import AccountForm from "@/components/account/AccountForm";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface EditAccountModalFooterProps {
  onClose: () => void;
}

function EditAccountModalFooter({ onClose }: EditAccountModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onClose}>Edit</Button>
    </DialogActions>
  );
}

function EditAccountModalBody() {
  return (
    <DialogContent>
      <AccountForm />
    </DialogContent>
  );
}

function EditAccountModalHeader() {
  return <DialogTitle>Edit account</DialogTitle>;
}

interface EditAccountModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function EditAccountModal({
  isShowing,
  onClose,
}: EditAccountModalProps) {
  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditAccountModalHeader />
      <EditAccountModalBody />
      <EditAccountModalFooter onClose={onClose} />
    </Dialog>
  );
}
