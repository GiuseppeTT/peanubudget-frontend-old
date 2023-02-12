import { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import useSWR, { mutate } from "swr";

export interface TransactionInput {
  date: string;
  account: string;
  payee: string;
  category: string;
  comment?: string;
  value: number;
}

export interface TransactionUpdate {
  date?: string;
  account?: string;
  payee?: string;
  category?: string;
  comment?: string;
  value?: number;
}

export interface TransactionOutput {
  id: number;
  date: string;
  account: string;
  payee: string;
  category: string;
  comment?: string;
  value: number;
}

export const defaultTransactionInput: TransactionInput = {
  date: "",
  account: "",
  payee: "",
  category: "",
  comment: "",
  value: 0,
};

export const defaultTransactionOutput: TransactionOutput = {
  id: 0,
  date: "",
  account: "",
  payee: "",
  category: "",
  comment: "",
  value: 0,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const suffix = "transaction";
const fetcher = async (path: string) => {
  return axios.get(path).then((response) => response.data);
};

export function useTransactions() {
  const { data, error, isLoading, isValidating } = useSWR<TransactionOutput[]>(
    `${API_BASE_URL}/${suffix}`,
    fetcher
  );

  const transactions = data ?? [];

  return {
    transactions,
    error,
    isLoading,
    isValidating,
  };
}

export function revalidateTransactions() {
  mutate(`${API_BASE_URL}/${suffix}`);
}

export async function getTransaction(id: GridRowId) {
  return axios.get(`${API_BASE_URL}/${suffix}/${id}`).then((response) => {
    return response.data;
  });
}

export async function createTransaction(input: TransactionInput) {
  return axios.post(`${API_BASE_URL}/${suffix}`, input);
}

export async function editTransaction(
  id: GridRowId,
  update: TransactionUpdate
) {
  return axios.put(`${API_BASE_URL}/${suffix}/${id}`, update);
}

export async function deleteTransaction(id: GridRowId) {
  return axios.delete(`${API_BASE_URL}/${suffix}/${id}`);
}
