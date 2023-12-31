import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { ArrowDownIcon } from "@/assets/icons";
import { Card } from "@/components";
import { Navbar } from "@/layouts";
import { fetchData } from "@/utils";
import style from "./Home.module.scss";

//https://restcountries.com/

export const homeLoader = () => {
  const url = `https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3`;

  const countries = fetchData(url);

  return defer({ countries });
};

export const Home = () => {
  const { countries } = useLoaderData();

  return (
    <>
      <Navbar />
      <section className={style.section}>
        <Suspense fallback={<h2>Loading countries...</h2>}>
          <Await resolve={countries}>
            <Card />
          </Await>
        </Suspense>
      </section>
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
