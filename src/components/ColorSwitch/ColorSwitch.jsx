import { useEffect, useState } from "react";
import { MoonFillIcon, MoonIcon } from "@/assets/icons";
import style from "./ColorSwitch.module.scss";

export const ColorSwitch = () => {
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
    <button className={style.button} type="button" onClick={toggleTheme}>
      <span>{theme === "dark" ? <MoonIcon /> : <MoonFillIcon />}</span>
      Dark mode
    </button>
  );
};
