import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

export interface TransactionFormProps {
  date: string;
  account: string;
  payee: string;
  category: string;
  comment: string;
  value: number;
  onDateChange: (newDate: Dayjs | null) => void;
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={onDateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              id="date"
              margin="dense"
              fullWidth
            />
          )}
        />
      </LocalizationProvider>
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
