import { api } from "@/services/api";
import { useCallback, useState } from "react";

interface UseFetchProps {
  path: string,
  method: "get" | "post" | "put" | "delete"
};

type UseFetchReturn<T> = [
  execute: () => Promise<void>,
  T | null,
  boolean,
  Error | null
];


export function useFetch<T>({ path, method }: UseFetchProps): UseFetchReturn<T> {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.request({
        url: path,
        method
      });

      setData(response.data);
    }
    catch (err) {
      if (err instanceof Error) {
        setError(err);
        return;
      };

      setError(new Error("Unknown error"));
    }
    finally { setLoading(false) };
  }, [path, method]);

  return [execute, data, loading, error];
};
