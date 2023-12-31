import { ColorSwitch } from "@/components";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.headerTitle}>Where in the world?</h1>
      <ColorSwitch />
    </header>
  );
};
