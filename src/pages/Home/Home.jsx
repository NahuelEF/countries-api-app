import { useFetch } from "@/hooks/useFetch";
import { Navbar } from "@/layout";
import { formatNumber } from "@/utils/formatNumber";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";

/* const countryName = "argentina";
const url = `https://restcountries.com/v3.1/name/${countryName}`; */

const region = "europe";
const url = `https://restcountries.com/v3.1/region/${region}`;

export const Home = () => {
  const { data, loading } = useFetch(url);

  return (
    <main className={style.main}>
      <Navbar />
      <section className={style.section}>
        {loading && <h2>Loading...</h2>}
        {data?.map(({ cca2, flags, name, population, region, capital }) => (
          <Link key={cca2} to={`country/${name.common}`} className={style.card}>
            <img className={style.cardImage} src={flags.png} alt={`Flag of ${name.common}`} />
            <div className={style.cardContainer}>
              <h2 className={style.cardTitle}>{name.common}</h2>
              <ul className={style.cardList}>
                <li>
                  <strong className={style.cardStrong}>Population:</strong> {formatNumber(population)}
                </li>
                <li>
                  <strong className={style.cardStrong}>Region:</strong> {region}
                </li>
                <li>
                  <strong className={style.cardStrong}>Capital:</strong> {capital}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};
