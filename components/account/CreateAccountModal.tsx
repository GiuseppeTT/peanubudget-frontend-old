import AccountForm from "@/components/account/AccountForm";
import { createAccount, revalidateAccounts } from "@/lib/account";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface CreateAccountModalFooterProps {
  onClose: () => void;
  onCreate: () => void;
}

function CreateAccountModalFooter({
  onClose,
  onCreate,
}: CreateAccountModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onCreate}>Create</Button>
    </DialogActions>
  );
}

function CreateAccountModalBody(props: any) {
  return (
    <DialogContent>
      <AccountForm {...props} />
    </DialogContent>
  );
}

function CreateAccountModalHeader() {
  return <DialogTitle>Create account</DialogTitle>;
}

export interface CreateAccountModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function CreateAccountModal({
  isShowing,
  onClose,
}: CreateAccountModalProps) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(Number(event.target.value));
  };

  const handleCreate = async () => {
    await createAccount({ name, balance });
    revalidateAccounts();

    onClose();
    setName("");
    setBalance(0);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <CreateAccountModalHeader />
      <CreateAccountModalBody
        name={name}
        balance={balance}
        handleNameChange={handleNameChange}
        handleBalanceChange={handleBalanceChange}
      />
      <CreateAccountModalFooter onClose={onClose} onCreate={handleCreate} />
    </Dialog>
  );
}
