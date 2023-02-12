import CategoryForm from "@/components/category/CategoryForm";
import {
  createCategory,
  revalidateCategories,
  defaultCategoryInput,
} from "@/lib/category";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface CreateCategoryModalFooterProps {
  onClose: () => void;
  onCreate: () => void;
}

function CreateCategoryModalFooter({
  onClose,
  onCreate,
}: CreateCategoryModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onCreate}>Create</Button>
    </DialogActions>
  );
}

function CreateCategoryModalBody(props: any) {
  return (
    <DialogContent>
      <CategoryForm {...props} />
    </DialogContent>
  );
}

function CreateCategoryModalHeader() {
  return <DialogTitle>Create category</DialogTitle>;
}

export interface CreateCategoryModalProps {
  isShowing: boolean;
  onClose: () => void;
}

export default function CreateCategoryModal({
  isShowing,
  onClose,
}: CreateCategoryModalProps) {
  const [name, setName] = useState(defaultCategoryInput.name);
  const [budget, setBudget] = useState(defaultCategoryInput.budget);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleCreate = async () => {
    await createCategory({ name, budget });
    revalidateCategories();

    onClose();
    setName(defaultCategoryInput.name);
    setBudget(defaultCategoryInput.budget);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <CreateCategoryModalHeader />
      <CreateCategoryModalBody
        name={name}
        budget={budget}
        onNameChange={handleNameChange}
        onBudgetChange={handleBudgetChange}
      />
      <CreateCategoryModalFooter onClose={onClose} onCreate={handleCreate} />
    </Dialog>
  );
}
