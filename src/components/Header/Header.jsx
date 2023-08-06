import { IconMoon, IconMoonFill } from "@/assets/icons";
import { useEffect, useState } from "react";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.headerTitle}>Where in the world?</h1>
      <ThemeSwitch />
    </header>
  );
};

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className={style.headerButton} type="button">
      <span>{theme === "dark" ? <IconMoon /> : <IconMoonFill />}</span>
      Dark mode
    </button>
  );
};
