import EditPayeeModal from "@/components/payee/EditPayeeModal";
import { PayeeOutput, defaultPayeeOutput } from "@/lib/payee";
import { useBinaryState } from "@/lib/utils";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface EditPayeeButtonProps {
  payees: PayeeOutput[];
  selectedRowIds: GridRowId[];
}

export default function EditPayeeButton({
  payees,
  selectedRowIds,
}: EditPayeeButtonProps) {
  const [isShowing, setShow, setClose] = useBinaryState(false);

  const handleShow = () => {
    if (selectedRowIds.length === 0) {
      return;
    } else if (selectedRowIds.length === 1) {
      setShow();
    } else {
      alert("You can only edit one payee at a time.");
    }
  };

  const payee =
    payees.find((payee) => payee.id === selectedRowIds[0]) ??
    defaultPayeeOutput;

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
      <EditPayeeModal payee={payee} isShowing={isShowing} onClose={setClose} />
    </>
  );
}
