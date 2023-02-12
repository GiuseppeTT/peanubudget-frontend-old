import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export interface TransactionFormProps {
  date: string;
  account: string;
  payee: string;
  category: string;
  comment: string;
  value: number;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAccountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePayeeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TransactionForm({
  date,
  account,
  payee,
  category,
  comment,
  value,
  handleDateChange,
  handleAccountChange,
  handlePayeeChange,
  handleCategoryChange,
  handleCommentChange,
  handleValueChange,
}: TransactionFormProps) {
  return (
    <Box component="form">
      <TextField
        required
        id="date"
        label="Date"
        type="string"
        value={date}
        onChange={handleDateChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="account"
        label="Account"
        type="string"
        value={account}
        onChange={handleAccountChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="payee"
        label="Payee"
        type="string"
        value={payee}
        onChange={handlePayeeChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="category"
        label="Category"
        type="string"
        value={category}
        onChange={handleCategoryChange}
        margin="dense"
        fullWidth
      />
      <TextField
        id="comment"
        label="Comment"
        type="string"
        value={comment}
        onChange={handleCommentChange}
        margin="dense"
        fullWidth
      />
      <TextField
        required
        id="value"
        label="Value"
        type="number"
        value={value}
        onChange={handleValueChange}
        margin="dense"
        fullWidth
      />
    </Box>
  );
}
