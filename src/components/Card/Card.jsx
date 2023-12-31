import { useMemo } from "react";
import { Link, useAsyncValue, useSearchParams } from "react-router-dom";
import { formatDecimalNumber } from "@/utils";
import style from "./Card.module.scss";

export const Card = () => {
  const resolvedCountries = useAsyncValue();
  const [searchParams] = useSearchParams();
  const region = searchParams.get("region");

  const filteredCountries = useMemo(
    () => (region ? resolvedCountries.filter((country) => country.region.toLowerCase() === region) : resolvedCountries),
    [region]
  );

  return filteredCountries.map(({ flags, name, population, region, capital, cca3 }) => (
    <Link key={cca3} to={`country/${cca3}`} state={{ search: `?${searchParams.toString()}` }}>
      <article className={style.card}>
        <img
          className={style.cardImage}
          src={flags.png}
          alt={flags.alt ? flags.alt : `Flag of ${name.common}`}
          loading="lazy"
        />
        <div className={style.cardContainer}>
          <h2 className={style.cardTitle}>{name.common}</h2>
          <ul className={style.cardList}>
            <li>
              <strong className={style.cardStrong}>Population:</strong> {formatDecimalNumber(population)}
            </li>
            <li>
              <strong className={style.cardStrong}>Region:</strong> {region}
            </li>
            <li>
              <strong className={style.cardStrong}>Capital:</strong> {capital}
            </li>
          </ul>
        </div>
      </article>
    </Link>
  ));
};
