import EditAccountModal from "@/components/account/EditAccountModal";
import { AccountOutput, defaultAccountOutput } from "@/lib/account";
import { useBinaryState } from "@/lib/utils";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { GridRowId } from "@mui/x-data-grid";

export interface EditAccountButtonProps {
  accounts: AccountOutput[];
  selectedRowIds: GridRowId[];
}

export default function EditAccountButton({
  accounts,
  selectedRowIds,
}: EditAccountButtonProps) {
  const [isShowing, setShow, setClose] = useBinaryState(false);

  const handleShow = () => {
    if (selectedRowIds.length === 0) {
      return;
    } else if (selectedRowIds.length === 1) {
      setShow();
    } else {
      alert("You can only edit one account at a time.");
    }
  };

  const account =
    accounts.find((account) => account.id === selectedRowIds[0]) ??
    defaultAccountOutput;

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
      <EditAccountModal
        account={account}
        isShowing={isShowing}
        onClose={setClose}
      />
    </>
  );
}
