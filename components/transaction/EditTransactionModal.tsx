import TransactionForm from "@/components/transaction/TransactionForm";
import {
  TransactionOutput,
  editTransaction,
  revalidateTransactions,
  defaultTransactionInput,
} from "@/lib/transaction";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs, { Dayjs } from "dayjs";
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
  const [id, setId] = useState(0);
  const [date, setDate] = useState(defaultTransactionInput.date);
  const [account, setAccount] = useState(defaultTransactionInput.account);
  const [payee, setPayee] = useState(defaultTransactionInput.payee);
  const [category, setCategory] = useState(defaultTransactionInput.category);
  const [comment, setComment] = useState(defaultTransactionInput.comment);
  const [value, setValue] = useState(defaultTransactionInput.value);

  useEffect(() => {
    setId(transaction.id);
    setDate(dayjs(transaction.date));
    setAccount(transaction.account);
    setPayee(transaction.payee);
    setCategory(transaction.category);
    setComment(transaction.comment);
    setValue(transaction.value);
  }, [transaction]);

  const handleDateChange = (newDate: Dayjs) => {
    setDate(newDate);
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
    setId(0);
    setDate(defaultTransactionInput.date);
    setAccount(defaultTransactionInput.account);
    setPayee(defaultTransactionInput.payee);
    setCategory(defaultTransactionInput.category);
    setComment(defaultTransactionInput.comment);
    setValue(defaultTransactionInput.value);
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
