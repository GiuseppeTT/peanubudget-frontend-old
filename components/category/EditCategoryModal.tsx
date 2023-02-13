import CategoryForm from "@/components/category/CategoryForm";
import {
  CategoryOutput,
  editCategory,
  revalidateCategories,
  defaultCategoryInput,
} from "@/lib/category";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

interface EditCategoryModalFooterProps {
  onClose: () => void;
  onEdit: () => void;
}

function EditCategoryModalFooter({
  onClose,
  onEdit,
}: EditCategoryModalFooterProps) {
  return (
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onEdit}>Edit</Button>
    </DialogActions>
  );
}

function EditCategoryModalBody(props: any) {
  return (
    <DialogContent>
      <CategoryForm {...props} />
    </DialogContent>
  );
}

function EditCategoryModalHeader() {
  return <DialogTitle>Edit category</DialogTitle>;
}

export interface EditCategoryModalProps {
  category: CategoryOutput;
  isShowing: boolean;
  onClose: () => void;
}

export default function EditCategoryModal({
  category,
  isShowing,
  onClose,
}: EditCategoryModalProps) {
  const [id, setId] = useState(0);
  const [name, setName] = useState(defaultCategoryInput.name);
  const [budget, setBudget] = useState(defaultCategoryInput.budget);

  useEffect(() => {
    setId(category.id);
    setName(category.name);
    setBudget(category.budget);
  }, [category]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleEdit = async () => {
    await editCategory(id, { name, budget });
    revalidateCategories();

    onClose();
    setId(0);
    setName(defaultCategoryInput.name);
    setBudget(defaultCategoryInput.budget);
  };

  return (
    <Dialog open={isShowing} onClose={onClose}>
      <EditCategoryModalHeader />
      <EditCategoryModalBody
        name={name}
        budget={budget}
        onNameChange={handleNameChange}
        onBudgetChange={handleBudgetChange}
      />
      <EditCategoryModalFooter onClose={onClose} onEdit={handleEdit} />
    </Dialog>
  );
}
