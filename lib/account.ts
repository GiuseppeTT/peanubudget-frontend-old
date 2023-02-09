import useSWR from "swr";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const suffix = "account";
const fetcher = (path: string) => fetch(path).then((res) => res.json());

export function useAccounts() {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/${suffix}`,
    fetcher
  );

  return {
    accounts: data,
    error,
    isLoading,
  };
}
