import { Suspense } from "react";
import { Await, defer, useAsyncError, useLoaderData, useLocation } from "react-router-dom";
import { ArrowDownIcon } from "@/assets/icons";
import { CardList } from "@/components";
import { Navbar } from "@/layouts";
import { getAllCountries } from "@/utils";
import style from "./Home.module.scss";

export const homeLoader = async () => {
  const countries = getAllCountries();

  return defer({ countries });
};

export const Home = () => {
  const { countries } = useLoaderData();

  return (
    <>
      <Navbar />
      <Suspense fallback={<h2>Loading countries...</h2>}>
        <Await resolve={countries} errorElement={<CountriesError />}>
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

const CountriesError = () => {
  const error = useAsyncError();
  return (
    <>
      <p>{error.statusText}</p>
      <p>{error.status}</p>
    </>
  );
};
