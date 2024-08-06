import { DesktopHeader } from "./DesktopHeader"
import { MobileHeader } from "./MobileHeader"

export interface HeaderProps {
  lng: string
};

export function Header({ lng }: HeaderProps) {
  return (
    <>
      <DesktopHeader lng={lng} />
      <MobileHeader lng={lng} />
    </>
  )
}
