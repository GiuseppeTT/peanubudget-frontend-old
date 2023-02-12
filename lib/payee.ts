import { GridRowId } from "@mui/x-data-grid";
import axios from "axios";
import useSWR, { mutate } from "swr";

export interface PayeeInput {
  name: string;
}

export interface PayeeUpdate {
  name?: string;
}

export interface PayeeOutput {
  id: number;
  name: string;
}

export const defaultPayeeInput: PayeeInput = {
  name: "",
};

export const defaultPayeeOutput: PayeeOutput = {
  id: 0,
  name: "",
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const suffix = "payee";
const fetcher = async (path: string) => {
  return axios.get(path).then((response) => response.data);
};

export function usePayees() {
  const { data, error, isLoading, isValidating } = useSWR<PayeeOutput[]>(
    `${API_BASE_URL}/${suffix}`,
    fetcher
  );

  const payees = data ?? [];

  return {
    payees,
    error,
    isLoading,
    isValidating,
  };
}

export function revalidatePayees() {
  mutate(`${API_BASE_URL}/${suffix}`);
}

export async function getPayee(id: GridRowId) {
  return axios.get(`${API_BASE_URL}/${suffix}/${id}`).then((response) => {
    return response.data;
  });
}

export async function createPayee(input: PayeeInput) {
  return axios.post(`${API_BASE_URL}/${suffix}`, {
    ...input,
    expenditure: 123,
  }); // For json-server
}

export async function editPayee(id: GridRowId, update: PayeeUpdate) {
  return axios.put(`${API_BASE_URL}/${suffix}/${id}`, {
    ...update,
    expenditure: 123,
  }); // For json-server
}

export async function deletePayee(id: GridRowId) {
  return axios.delete(`${API_BASE_URL}/${suffix}/${id}`);
}
