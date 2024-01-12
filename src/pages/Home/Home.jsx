import { Suspense } from "react";
import { Await, defer, useAsyncError, useLoaderData } from "react-router-dom";
import { ArrowDownIcon } from "@/assets/icons";
import { CardList } from "@/components";
import { Navbar } from "@/layouts";
import { getAllCountries } from "@/utils";
import style from "./Home.module.scss";

export const homeLoader = async () => {
  const countries = getAllCountries();

  return defer({ countries });
};

const HomeError = () => {
  const error = useAsyncError();
  return (
    <>
      <p>{error.statusText}</p>
      <p>{error.status}</p>
    </>
  );
};

const Loading = () => <h2>Loading countries...</h2>;

export const Home = () => {
  const { countries } = useLoaderData();

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Await resolve={countries} errorElement={<HomeError />}>
          <CardList />
        </Await>
      </Suspense>

      <button
        className={style.button}
        type="button"
        title="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span>
          <ArrowDownIcon />
        </span>
      </button>
    </>
  );
};
