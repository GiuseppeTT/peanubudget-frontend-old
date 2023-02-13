import CategoryTable from "@/components/category/CategoryTable";
import CreateCategoryButton from "@/components/category/CreateCategoryButton";
import DeleteCategoryButton from "@/components/category/DeleteCategoryButton";
import EditCategoryButton from "@/components/category/EditCategoryButton";
import { useCategories } from "@/lib/category";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GridRowId } from "@mui/x-data-grid";
import { useState } from "react";

export default function CategoryCRUDTable() {
  const { categories, error, isLoading, isValidating } = useCategories();
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowId[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={1} justifyContent="flex-end" xs={12}>
          <Grid item xs="auto">
            <CreateCategoryButton />
          </Grid>
          <Grid item xs="auto">
            <EditCategoryButton
              categories={categories}
              selectedRowIds={selectedRowIds}
            />
          </Grid>
          <Grid item xs="auto">
            <DeleteCategoryButton selectedRowIds={selectedRowIds} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CategoryTable
            categories={categories}
            error={error}
            isLoading={isLoading}
            isValidating={isValidating}
            selectedRowIds={selectedRowIds}
            setSelectedRowIds={setSelectedRowIds}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
