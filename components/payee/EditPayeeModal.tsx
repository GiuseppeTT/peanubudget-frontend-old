import PayeeForm from "@/components/payee/PayeeForm";
import {
  PayeeOutput,
  editPayee,
  revalidatePayees,
  defaultPayeeOutput,
} from "@/lib/payee";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

interface EditPayeeModalFooterProps {
  onClose: () => void;
  onEdit: () => void;
}

function EditPayeeModalFooter({ onClose, onEdit }: EditPayeeModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onEdit}>Edit</Button>
    </DialogActions>
  );
}

function EditPayeeModalBody(props: any) {
  return (
    <DialogContent>
      <PayeeForm {...props} />
    </DialogContent>
  );
}

function EditPayeeModalHeader() {
  return <DialogTitle>Edit payee</DialogTitle>;
}

export interface EditPayeeModalProps {
  payee: PayeeOutput;
  isShowing: boolean;
  onClose: () => void;
}

export default function EditPayeeModal({
  payee,
  isShowing,
  onClose,
}: EditPayeeModalProps) {
  const [id, setId] = useState(defaultPayeeOutput.id);
  const [name, setName] = useState(defaultPayeeOutput.name);

  useEffect(() => {
    setId(payee.id);
    setName(payee.name);
  }, [payee]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEdit = async () => {
    await editPayee(id, { name });
    revalidatePayees();

    onClose();
    setId(defaultPayeeOutput.id);
    setName(defaultPayeeOutput.name);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditPayeeModalHeader />
      <EditPayeeModalBody name={name} handleNameChange={handleNameChange} />
      <EditPayeeModalFooter onClose={onClose} onEdit={handleEdit} />
    </Dialog>
  );
}
