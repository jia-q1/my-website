"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white/90 px-[7%] py-4 backdrop-blur-sm">
      <Link
        href="/"
        className="font-serif text-2xl tracking-wide text-ink"
        onClick={() => setOpen(false)}
      >
        Jia Qi
      </Link>

      <nav className="hidden gap-8 font-serif text-lg tracking-[0.12em] text-ink sm:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={clsx(
              "transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
              pathname === link.href && "text-accent"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
      >
        <span
          className={clsx(
            "block h-[2px] w-6 bg-ink transition-transform",
            open && "translate-y-[7px] rotate-45"
          )}
        />
        <span
          className={clsx("block h-[2px] w-6 bg-ink transition-opacity", open && "opacity-0")}
        />
        <span
          className={clsx(
            "block h-[2px] w-6 bg-ink transition-transform",
            open && "-translate-y-[7px] -rotate-45"
          )}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute left-0 top-full flex w-full flex-col items-center gap-2 bg-white py-6 font-serif text-xl tracking-[0.12em] text-ink shadow-md sm:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={clsx(
                "py-2 transition-colors hover:text-accent",
                pathname === link.href && "text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
