import { Form, useSearchParams } from "react-router-dom";
import { SearchIcon } from "@/assets/icons";
import { SEARCH_PARAM } from "@/constants";
import style from "./Search.module.scss";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get(SEARCH_PARAM.COUNTRY_NAME) || "";

  const handleSearchChange = (event) => {
    const searchText = event.target.value;

    if (searchText.length === 0) {
      searchParams.delete(SEARCH_PARAM.COUNTRY_NAME);
    } else {
      searchParams.set(SEARCH_PARAM.COUNTRY_NAME, searchText);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Form className={style.search} onSubmit={(e) => e.preventDefault()}>
      <label className={style.searchLabel}>
        <span className={style.searchIcon}>
          <SearchIcon />
        </span>
        <input
          className={style.searchInput}
          type="search"
          name={SEARCH_PARAM.COUNTRY_NAME}
          defaultValue={searchValue}
          placeholder="Search for a country..."
          autoComplete="country-name"
          onChange={handleSearchChange}
        />
      </label>
    </Form>
  );
};
