import { Link, useLoaderData, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@/assets/icons";
import { fetchData, formatDecimalNumber } from "@/utils";
import style from "./Details.module.scss";

const DETAILS = {
  NATIVE_NAME: "native name",
  POPULATION: "population",
  REGION: "region",
  SUB_REGION: "sub region",
  CAPITAL: "capital",
  TOP_LEVEL_DOMAIN: "top level domain",
  CURRENCIES: "currencies",
  LANGUAGES: "languages",
  BORDER_COUNTRIES: "border countries",
};

//https://restcountries.com/v3.1/alpha?codes={code},{code},{code}

export const detailsLoader = async ({ params }) => {
  const { countryId } = params;

  const details = await fetchData(
    `https://restcountries.com/v3.1/alpha/${countryId}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`
  );

  return details;
};

const Description = ({ title, description }) => (
  <li className={style.detailsItem}>
    <strong className={style.detailsDescription}>{title}:</strong> {description}
  </li>
);

export const Details = () => {
  const details = useLoaderData();
  const { state } = useLocation();

  const search = state?.search || "";

  return (
    <>
      <Link to={`/${search}`} relative="path" className={style.button}>
        <span>
          <ArrowLeftIcon />
        </span>
        Back
      </Link>
      <section className={style.section}>
        <img
          className={style.sectionFlag}
          src={details.flags.png}
          alt={details.flags.alt ? details.flags.alt : `Flag of ${details.name.common}`}
        />
        <section className={style.details}>
          <h2 className={style.detailsTitle}>{details.name.common}</h2>
          <div className={style.detailsList}>
            <ul>
              <Description
                title={DETAILS.NATIVE_NAME}
                description={Object.values(details.name.nativeName).at(-1).common}
              />
              <Description title={DETAILS.POPULATION} description={formatDecimalNumber(details.population)} />
              <Description title={DETAILS.REGION} description={details.region} />
              <Description title={DETAILS.SUB_REGION} description={details.subregion} />
              <Description title={DETAILS.CAPITAL} description={details.capital} />
            </ul>
            <ul>
              <Description title={DETAILS.TOP_LEVEL_DOMAIN} description={details.tld} />
              <Description title={DETAILS.CURRENCIES} description={Object.values(details.currencies).at(-1).name} />
              <Description title={DETAILS.LANGUAGES} description={Object.values(details.languages).join(", ")} />
            </ul>
          </div>
          {details.borders.length > 0 && (
            <div className={style.detailsBorders}>
              <strong className={style.detailsDescription}>{DETAILS.BORDER_COUNTRIES}:</strong>
              <ul className={style.detailsBorders}>
                {details.borders.map((border) => (
                  <li key={border} className={style.buttonCountry}>
                    <Link to={`../${border}`} relative="path" state={{ search }}>
                      {border}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </section>
    </>
  );
};
