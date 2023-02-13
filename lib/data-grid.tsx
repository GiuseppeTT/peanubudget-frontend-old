import Typography from "@mui/material/Typography";
import { GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const minWidth = 200;

export const pageSize = 10;

export function renderDateCell({ value }: GridRenderCellParams) {
  const text = dayjs(value).format("MM/DD/YYYY");

  return <Typography variant="body2">{text}</Typography>;
}

export function renderCurrencyCell({ value }: GridRenderCellParams) {
  let color: string;
  if (value < 0) {
    color = "error.main";
  } else if (value === 0) {
    color = "text.secondary";
  } else {
    color = "success.main";
  }

  const text = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Typography variant="body2" sx={{ color: color }}>
      {text}
    </Typography>
  );
}
