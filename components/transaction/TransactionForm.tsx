import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface TransactionFormProps {
  date: string;
  account: string;
  payee: string;
  category: string;
  comment: string;
  value: number;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAccountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayeeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TransactionForm({
  date,
  account,
  payee,
  category,
  comment,
  value,
  onDateChange,
  onAccountChange,
  onPayeeChange,
  onCategoryChange,
  onCommentChange,
  onValueChange,
}: TransactionFormProps) {
  return (
    <Box component="form">
      <TextField
        required
        id="date"
        label="Date"
        type="string"
        value={date}
        onChange={onDateChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="account"
        label="Account"
        type="string"
        value={account}
        onChange={onAccountChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="payee"
        label="Payee"
        type="string"
        value={payee}
        onChange={onPayeeChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="category"
        label="Category"
        type="string"
        value={category}
        onChange={onCategoryChange}
        margin="dense"
        fullWidth
      />
      <TextField
        id="comment"
        label="Comment"
        type="string"
        value={comment}
        onChange={onCommentChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="value"
        label="Value"
        type="number"
        value={value}
        onChange={onValueChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
