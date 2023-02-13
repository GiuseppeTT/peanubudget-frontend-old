import AccountForm from "@/components/account/AccountForm";
import {
  AccountOutput,
  editAccount,
  revalidateAccounts,
  defaultAccountInput,
} from "@/lib/account";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

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
  account: AccountOutput;
  isShowing: boolean;
  onClose: () => void;
}

export default function EditAccountModal({
  account,
  isShowing,
  onClose,
}: EditAccountModalProps) {
  const [id, setId] = useState(0);
  const [name, setName] = useState(defaultAccountInput.name);
  const [balance, setBalance] = useState(defaultAccountInput.balance);

  useEffect(() => {
    setId(account.id);
    setName(account.name);
    setBalance(account.balance);
  }, [account]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(Number(event.target.value));
  };

  const handleEdit = async () => {
    await editAccount(id, { name, balance });
    revalidateAccounts();

    onClose();
    setId(0);
    setName(defaultAccountInput.name);
    setBalance(defaultAccountInput.balance);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditAccountModalHeader />
      <EditAccountModalBody
        name={name}
        balance={balance}
        onNameChange={handleNameChange}
        onBalanceChange={handleBalanceChange}
      />
      <EditAccountModalFooter onClose={onClose} onEdit={handleEdit} />
    </Dialog>
  );
}
