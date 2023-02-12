import { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import useSWR, { mutate } from "swr";

export interface AccountInput {
  name: string;
  balance: number;
}

export interface AccountUpdate {
  name?: string;
  balance?: number;
}

export interface AccountOutput {
  id: number;
  name: string;
  balance: number;
}

export const defaultAccountInput: AccountInput = {
  name: "",
  balance: 0,
};

export const defaultAccountOutput: AccountOutput = {
  id: 0,
  name: "",
  balance: 0,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const suffix = "account";
const fetcher = async (path: string) => {
  return axios.get(path).then((response) => response.data);
};

export function useAccounts() {
  const { data, error, isLoading, isValidating } = useSWR<AccountOutput[]>(
    `${API_BASE_URL}/${suffix}`,
    fetcher
  );

  const accounts = data ?? [];

  return {
    accounts,
    error,
    isLoading,
    isValidating,
  };
}

export function revalidateAccounts() {
  mutate(`${API_BASE_URL}/${suffix}`);
}

export async function getAccount(id: GridRowId) {
  return axios.get(`${API_BASE_URL}/${suffix}/${id}`).then((response) => {
    return response.data;
  });
}

export async function createAccount(input: AccountInput) {
  axios.post(`${API_BASE_URL}/${suffix}`, input);
}

export async function editAccount(id: GridRowId, update: AccountUpdate) {
  axios.put(`${API_BASE_URL}/${suffix}/${id}`, update);
}

export async function deleteAccount(id: GridRowId) {
  axios.delete(`${API_BASE_URL}/${suffix}/${id}`);
}
