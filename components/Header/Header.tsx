"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/notes"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
