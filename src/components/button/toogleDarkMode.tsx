"use client";
import { useTheme } from "next-themes";

const ToggleDarkModeButton = () => {
  const { theme, setTheme } = useTheme();


  return (
    <button
      className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Ikon matahari */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </button>
  );
};

export default ToggleDarkModeButton;
