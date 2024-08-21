import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  condition: boolean
};

export function usePrivateRoute({ condition }: Props) {
  const [valid, setValid] = useState(false);

  const route = useRouter();
  useEffect(() => {
    if (!condition) {
      route.push("/");
      return;
    }

    setValid(true);
  }, []);

  return valid;
};
