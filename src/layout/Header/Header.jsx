import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MoonFillIcon, MoonIcon } from "@/assets/icons";
import style from "./Header.module.scss";

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
      <span>{theme === "dark" ? <MoonIcon /> : <MoonFillIcon />}</span>
      Dark mode
    </button>
  );
};

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Where in the world?</h1>
        <ThemeSwitch />
      </header>
      <Outlet />
    </>
  );
};
