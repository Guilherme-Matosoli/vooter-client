import axios from "axios";
import { useState } from "react";

interface UseFetchProps {
  path: string,
  method: "get" | "post" | "put" | "delete"
};

type UseFetchReturn<T> = [T, boolean, Error];

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function useFetch<T>({ path, method }: UseFetchProps): UseFetchReturn<T> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  api.request({
    url: path,
    method
  })
    .then(response => setData(response.data));

  return [data as T, loading, new Error("")];
};
