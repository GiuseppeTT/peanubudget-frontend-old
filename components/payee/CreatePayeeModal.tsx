import PayeeForm from "@/components/payee/PayeeForm";
import { createPayee, revalidatePayees, defaultPayeeInput } from "@/lib/payee";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface CreatePayeeModalFooterProps {
  onClose: () => void;
  onCreate: () => void;
}

function CreatePayeeModalFooter({
  onClose,
  onCreate,
}: CreatePayeeModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onCreate}>Create</Button>
    </DialogActions>
  );
}

function CreatePayeeModalBody(props: any) {
  return (
    <DialogContent>
      <PayeeForm {...props} />
    </DialogContent>
  );
}

function CreatePayeeModalHeader() {
  return <DialogTitle>Create payee</DialogTitle>;
}

export interface CreatePayeeModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function CreatePayeeModal({
  isShowing,
  onClose,
}: CreatePayeeModalProps) {
  const [name, setName] = useState(defaultPayeeInput.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCreate = async () => {
    await createPayee({ name });
    revalidatePayees();

    onClose();
    setName(defaultPayeeInput.name);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <CreatePayeeModalHeader />
      <CreatePayeeModalBody name={name} handleNameChange={handleNameChange} />
      <CreatePayeeModalFooter onClose={onClose} onCreate={handleCreate} />
    </Dialog>
  );
}
