import { PollContextProvider } from "@/contexts/PollContext";

export default function PollLayout({ children }: { children: React.ReactNode }) {
  return (
    <PollContextProvider>
      {children}
    </PollContextProvider>
  )
}
