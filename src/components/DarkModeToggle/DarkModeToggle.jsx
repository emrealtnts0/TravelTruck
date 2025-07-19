import { useEffect, useState } from "react";
import styles from "./DarkModeToggle.module.css";

const THEME_KEY = "theme";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [dark]);

  return (
    <button
      className={styles.toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark((d) => !d)}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
} 