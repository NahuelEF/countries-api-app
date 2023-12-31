import { useRouteError } from "react-router-dom";
import style from "./Error.module.scss";

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className={style.main}>
      <h1 className={style.title}>Oops!</h1>
      <p className={style.error}>
        {error.status} - {error.statusText}
      </p>
      <p>{error.data}</p>
    </main>
  );
};
