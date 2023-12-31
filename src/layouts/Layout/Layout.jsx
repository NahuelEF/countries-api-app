import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};
