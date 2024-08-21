import { PollContextProvider } from "@/contexts/PolllContext";

export default function PollLayout({ children }: { children: React.ReactNode }) {
  return (
    <PollContextProvider>
      {children}
    </PollContextProvider>
  );
};
