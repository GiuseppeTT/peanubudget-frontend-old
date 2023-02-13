import { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import useSWR, { mutate } from "swr";

export interface CategoryInput {
  name: string;
  budget: number;
}

export interface CategoryUpdate {
  name?: string;
  budget?: number;
}

export interface CategoryOutput {
  id: number;
  name: string;
  budget: number;
  expenditure: number;
  available: number;
}

export const defaultCategoryInput: CategoryInput = {
  name: "",
  budget: 0,
};

export const defaultCategoryOutput: CategoryOutput = {
  id: 0,
  name: "",
  budget: 0,
  expenditure: 0,
  available: 0,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const suffix = "category";
const fetcher = async (path: string) => {
  return axios.get(path).then((response) => response.data);
};

export function useCategories() {
  const { data, error, isLoading, isValidating } = useSWR<CategoryOutput[]>(
    `${API_BASE_URL}/${suffix}`,
    fetcher
  );

  const categories = data ?? [];

  return {
    categories,
    error,
    isLoading,
    isValidating,
  };
}

export function revalidateCategories() {
  mutate(`${API_BASE_URL}/${suffix}`);
}

export async function getCategory(id: GridRowId) {
  return axios.get(`${API_BASE_URL}/${suffix}/${id}`).then((response) => {
    return response.data;
  });
}

export async function createCategory(input: CategoryInput) {
  return axios.post(`${API_BASE_URL}/${suffix}`, {
    ...input,
    expenditure: 123,
    available: 123,
  }); // For json-server
}

export async function editCategory(id: GridRowId, update: CategoryUpdate) {
  return axios.put(`${API_BASE_URL}/${suffix}/${id}`, {
    ...update,
    expenditure: 123,
    available: 123,
  }); // For json-server
}

export async function deleteCategory(id: GridRowId) {
  return axios.delete(`${API_BASE_URL}/${suffix}/${id}`);
}
