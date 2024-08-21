import axios from "axios";
import { useState } from "react";

interface UseFetchProps {
  path: string,
  method: "get" | "post" | "put" | "delete"
};

type UseFetchReturn<T> = [
  execute: () => Promise<void>,
  T,
  boolean,
  Error | null
];

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function useFetch<T>({ path, method }: UseFetchProps): UseFetchReturn<T> {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  async function execute() {
    setLoading(true);

    try {
      const response = await api.request({
        url: path,
        method
      });

      setData(response.data);
    }
    catch (err) {
      setError(err);
    }
    finally { setLoading(false) };
  };

  return [execute, data as T, loading, error as Error];
};
