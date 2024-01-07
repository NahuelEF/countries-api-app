import { Link, useLoaderData, useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@/assets/icons";
import { formatDecimalNumber, getDeatilsCountry } from "@/utils";
import style from "./Details.module.scss";

const DETAIL = {
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

export const detailsLoader = async ({ params }) => {
  const { countryId } = params;

  const details = await getDeatilsCountry(countryId);

  return details;
};

export const Details = () => {
  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = useLoaderData();
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
        <img className={style.sectionFlag} src={flags.png} alt={flags.alt ? flags.alt : `Flag of ${name.common}`} />
        <section className={style.details}>
          <h2 className={style.detailsTitle}>{name.common}</h2>
          <div className={style.detailsList}>
            <ul>
              <Description title={DETAIL.NATIVE_NAME} description={Object.values(name.nativeName).at(-1).common} />
              <Description title={DETAIL.POPULATION} description={formatDecimalNumber(population)} />
              <Description title={DETAIL.REGION} description={region} />
              <Description title={DETAIL.SUB_REGION} description={subregion} />
              <Description title={DETAIL.CAPITAL} description={capital} />
            </ul>
            <ul>
              <Description title={DETAIL.TOP_LEVEL_DOMAIN} description={tld} />
              <Description title={DETAIL.CURRENCIES} description={Object.values(currencies).at(-1).name} />
              <Description title={DETAIL.LANGUAGES} description={Object.values(languages).join(", ")} />
            </ul>
          </div>
          {borders.length > 0 && (
            <div className={style.detailsBorders}>
              <strong className={style.detailsDescription}>{DETAIL.BORDER_COUNTRIES}:</strong>
              <ul className={style.detailsBorders}>
                {borders.map((border) => (
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

const Description = ({ title, description }) => (
  <li className={style.detailsItem}>
    <strong className={style.detailsDescription}>{title}:</strong> {description}
  </li>
);
