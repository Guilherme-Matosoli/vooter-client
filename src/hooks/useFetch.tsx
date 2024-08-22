import { api } from "@/services/api";
import { useCallback, useState } from "react";

interface UseFetchProps {
  path: string,
  method: "get" | "post" | "put" | "delete",
  body?: any
};

interface UseFetchReturn<T> {
  execute: () => Promise<void>,
  data: T | null,
  loading: boolean,
  error: Error | null
};


export function useFetch<T>({ path, method, body }: UseFetchProps): UseFetchReturn<T> {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.request({
        url: path,
        method,
        data: body && body
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

  return { execute, data, loading, error };
};
