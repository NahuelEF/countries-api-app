import { useMemo } from "react";
import { Link, useAsyncValue, useSearchParams } from "react-router-dom";
import { SEARCH_PARAM } from "@/constants";
import { formatDecimalNumber } from "@/utils";
import style from "./CardList.module.scss";

export const CardList = () => {
  const resolvedCountries = useAsyncValue();
  const [searchParams] = useSearchParams();
  const region = searchParams.get(SEARCH_PARAM.REGION);
  const countryName = searchParams.get(SEARCH_PARAM.COUNTRY_NAME)?.toLowerCase();

  const filteredCountries = useMemo(() => {
    if (region && countryName)
      return resolvedCountries.filter(
        (country) => country.region.toLowerCase() === region && country.name.common.toLowerCase().includes(countryName)
      );

    if (region) return resolvedCountries.filter((country) => country.region.toLowerCase() === region);

    if (countryName)
      return resolvedCountries.filter((country) => country.name.common.toLowerCase().includes(countryName));

    return resolvedCountries;
  }, [region, countryName]);

  return (
    <section className={style.section}>
      {filteredCountries.length === 0 ? (
        <p>Country not found</p>
      ) : (
        filteredCountries.map((countries) => <Card key={countries.cca3} countries={countries} search={searchParams} />)
      )}
    </section>
  );
};

const Card = ({ countries, search }) => {
  const { flags, name, population, region, capital, cca3 } = countries;

  return (
    <Link key={cca3} className={style.card} to={`country/${cca3}`} state={{ search: `?${search.toString()}` }}>
      <article>
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
  );
};
