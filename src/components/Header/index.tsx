import Link from "next/link";
import { ChangeThemeBtn } from "../ChangeThemeBtn";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full bg-white dark:bg-black p-5 rounded-lg">
      <h1 className="font-main font-bold text-2xl text-light dark:text-dark">
        <a href="/">
          Votter
        </a>
      </h1>

      <nav className="flex gap-8">
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/">Criar enquete</Link>
      </nav>

      <ChangeThemeBtn />
    </header>
  )
}
