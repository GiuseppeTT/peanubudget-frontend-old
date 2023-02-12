import TransactionForm from "@/components/transaction/TransactionForm";
import {
  TransactionOutput,
  editTransaction,
  revalidateTransactions,
  defaultTransactionOutput,
} from "@/lib/transaction";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

interface EditTransactionModalFooterProps {
  onClose: () => void;
  onEdit: () => void;
}

function EditTransactionModalFooter({
  onClose,
  onEdit,
}: EditTransactionModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onEdit}>Edit</Button>
    </DialogActions>
  );
}

function EditTransactionModalBody(props: any) {
  return (
    <DialogContent>
      <TransactionForm {...props} />
    </DialogContent>
  );
}

function EditTransactionModalHeader() {
  return <DialogTitle>Edit transaction</DialogTitle>;
}

export interface EditTransactionModalProps {
  transaction: TransactionOutput;
  isShowing: boolean;
  onClose: () => void;
}

export default function EditTransactionModal({
  transaction,
  isShowing,
  onClose,
}: EditTransactionModalProps) {
  const [id, setId] = useState(defaultTransactionOutput.id);
  const [date, setDate] = useState(defaultTransactionOutput.date);
  const [account, setAccount] = useState(defaultTransactionOutput.account);
  const [payee, setPayee] = useState(defaultTransactionOutput.payee);
  const [category, setCategory] = useState(defaultTransactionOutput.category);
  const [comment, setComment] = useState(defaultTransactionOutput.comment);
  const [value, setValue] = useState(defaultTransactionOutput.value);

  useEffect(() => {
    setId(transaction.id);
    setDate(transaction.date);
    setAccount(transaction.account);
    setPayee(transaction.payee);
    setCategory(transaction.category);
    setComment(transaction.comment);
    setValue(transaction.value);
  }, [transaction]);

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

  const handleEdit = async () => {
    await editTransaction(id, {
      date,
      account,
      payee,
      category,
      comment,
      value,
    });
    revalidateTransactions();

    onClose();
    setId(defaultTransactionOutput.id);
    setDate(defaultTransactionOutput.date);
    setAccount(defaultTransactionOutput.account);
    setPayee(defaultTransactionOutput.payee);
    setCategory(defaultTransactionOutput.category);
    setComment(defaultTransactionOutput.comment);
    setValue(defaultTransactionOutput.value);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditTransactionModalHeader />
      <EditTransactionModalBody
        date={date}
        account={account}
        payee={payee}
        category={category}
        comment={comment}
        value={value}
        onDateChange={handleDateChange}
        onAccountChange={handleAccountChange}
        onPayeeChange={handlePayeeChange}
        onCategoryChange={handleCategoryChange}
        onCommentChange={handleCommentChange}
        onValueChange={handleValueChange}
      />
      <EditTransactionModalFooter onClose={onClose} onEdit={handleEdit} />
    </Dialog>
  );
}
