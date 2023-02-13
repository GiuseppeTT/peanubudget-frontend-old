import EditTransactionModal from "@/components/transaction/EditTransactionModal";
import { TransactionOutput, defaultTransactionOutput } from "@/lib/transaction";
import { useBinaryState } from "@/lib/utils";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface EditTransactionButtonProps {
  transactions: TransactionOutput[];
  selectedRowIds: GridRowId[];
}

export default function EditTransactionButton({
  transactions,
  selectedRowIds,
}: EditTransactionButtonProps) {
  const [isShowing, setShow, setClose] = useBinaryState(false);

  const handleShow = () => {
    if (selectedRowIds.length === 0) {
      return;
    } else if (selectedRowIds.length === 1) {
      setShow();
    } else {
      alert("You can only edit one transaction at a time.");
    }
  };

  const transaction =
    transactions.find((transaction) => transaction.id === selectedRowIds[0]) ??
    defaultTransactionOutput;

  return (
    <>
      <Button
        variant="contained"
        color="warning"
        startIcon={<EditIcon />}
        onClick={handleShow}
      >
        Edit
      </Button>
      <EditTransactionModal
        transaction={transaction}
        isShowing={isShowing}
        onClose={setClose}
      />
    </>
  );
}
