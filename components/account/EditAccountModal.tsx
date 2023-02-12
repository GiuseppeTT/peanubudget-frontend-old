import AccountForm from "@/components/account/AccountForm";
import { editAccount, revalidateAccounts } from "@/lib/account";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface EditAccountModalFooterProps {
  onClose: () => void;
  onEdit: () => void;
}

function EditAccountModalFooter({
  onClose,
  onEdit,
}: EditAccountModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onEdit}>Edit</Button>
    </DialogActions>
  );
}

function EditAccountModalBody(props: any) {
  return (
    <DialogContent>
      <AccountForm {...props} />
    </DialogContent>
  );
}

function EditAccountModalHeader() {
  return <DialogTitle>Edit account</DialogTitle>;
}

export interface EditAccountModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function EditAccountModal({
  isShowing,
  onClose,
}: EditAccountModalProps) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(Number(event.target.value));
  };

  const handleEdit = async () => {
    await editAccount(1, { name, balance });
    revalidateAccounts();

    onClose();
    setName("");
    setBalance(0);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditAccountModalHeader />
      <EditAccountModalBody
        name={name}
        balance={balance}
        handleNameChange={handleNameChange}
        handleBalanceChange={handleBalanceChange}
      />
      <EditAccountModalFooter onClose={onClose} onEdit={handleEdit} />
    </Dialog>
  );
}
