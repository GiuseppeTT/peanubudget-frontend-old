import TransactionForm from "@/components/transaction/TransactionForm";
import {
  createTransaction,
  revalidateTransactions,
  defaultTransactionInput,
} from "@/lib/transaction";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface CreateTransactionModalFooterProps {
  onClose: () => void;
  onCreate: () => void;
}

function CreateTransactionModalFooter({
  onClose,
  onCreate,
}: CreateTransactionModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onCreate}>Create</Button>
    </DialogActions>
  );
}

function CreateTransactionModalBody(props: any) {
  return (
    <DialogContent>
      <TransactionForm {...props} />
    </DialogContent>
  );
}

function CreateTransactionModalHeader() {
  return <DialogTitle>Create transaction</DialogTitle>;
}

export interface CreateTransactionModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function CreateTransactionModal({
  isShowing,
  onClose,
}: CreateTransactionModalProps) {
  const [date, setDate] = useState(defaultTransactionInput.date);
  const [account, setAccount] = useState(defaultTransactionInput.account);
  const [payee, setPayee] = useState(defaultTransactionInput.payee);
  const [category, setCategory] = useState(defaultTransactionInput.category);
  const [comment, setComment] = useState(defaultTransactionInput.comment);
  const [value, setValue] = useState(defaultTransactionInput.value);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const handlePayeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayee(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const handleCreate = async () => {
    await createTransaction({ date, account, payee, category, comment, value });
    revalidateTransactions();

    onClose();
    setDate(defaultTransactionInput.date);
    setAccount(defaultTransactionInput.account);
    setPayee(defaultTransactionInput.payee);
    setCategory(defaultTransactionInput.category);
    setComment(defaultTransactionInput.comment);
    setValue(defaultTransactionInput.value);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <CreateTransactionModalHeader />
      <CreateTransactionModalBody
        date={date}
        account={account}
        payee={payee}
        category={category}
        comment={comment}
        value={value}
        handleDateChange={handleDateChange}
        handleAccountChange={handleAccountChange}
        handlePayeeChange={handlePayeeChange}
        handleCategoryChange={handleCategoryChange}
        handleCommentChange={handleCommentChange}
        handleValueChange={handleValueChange}
      />
      <CreateTransactionModalFooter onClose={onClose} onCreate={handleCreate} />
    </Dialog>
  );
}
