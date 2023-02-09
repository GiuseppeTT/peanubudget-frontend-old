import AccountForm from "@/components/account/AccountForm";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface CreateAccountModalFooterProps {
  onClose: () => void;
}

function CreateAccountModalFooter({ onClose }: CreateAccountModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onClose}>Create</Button>
    </DialogActions>
  );
}

function CreateAccountModalBody() {
  return (
    <DialogContent>
      <AccountForm />
    </DialogContent>
  );
}

function CreateAccountModalHeader() {
  return <DialogTitle>Create account</DialogTitle>;
}

interface CreateAccountModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function CreateAccountModal({
  isShowing,
  onClose,
}: CreateAccountModalProps) {
  return (
    <Dialog open={isShowing} onClose={onClose}>
      <CreateAccountModalHeader />
      <CreateAccountModalBody />
      <CreateAccountModalFooter onClose={onClose} />
    </Dialog>
  );
}
