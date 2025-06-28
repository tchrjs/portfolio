"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeSwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme !== undefined) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <button className={cn("w-4 h-4 flex", className)} onClick={handleClick}>
      <FaSun className="absolute block dark:hidden" />
      <FaMoon className="absolute hidden dark:block" />
    </button>
  );
}
