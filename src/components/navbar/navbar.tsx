"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleDarkModeButton from "../button/toogleDarkMode";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Portofolio", href: "/portofolio" },
  { id: 3, title: "Blog", href: "/blog" },
  { id: 4, title: "About", href: "/about" },
  { id: 5, title: "Contact", href: "/contact" },
  { id: 6, title: "Dashboard", href: "/dashboard" },
];

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--background)] text-[var(--foreground)] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl text-[var(--primary)] font-extrabold tracking-wide hover:text-[var(--muted-foreground)] transition focus:outline-none focus:ring-2 focus:ring-[var(--muted-foreground)] rounded"
          tabIndex={0}
        >
          /ProjectRavel
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-lg font-medium transition rounded ${
                  isActive ? "text-[var(--primary)]" : ""
                }`}
                tabIndex={0}
              >
                {link.title}
              </Link>
            );
          })}
          <button className="text-lg text-white cursor-pointer font-medium transition bg-[var(--primary)] px-3 rounded">
            Logout
          </button>
        </div>

        {/* Toggle Dark Mode + Hamburger (mobile) */}
        <div className="flex items-center space-x-4">
          <ToggleDarkModeButton />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-1 w-8 bg-[var(--primary)] rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-[var(--primary)] rounded transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-[var(--primary)] rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)] ">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[var(--foreground)] text-lg font-medium py-2 hover:bg-indigo-600 rounded transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isActive ? "text-[var(--primary)]" : ""}`}
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
