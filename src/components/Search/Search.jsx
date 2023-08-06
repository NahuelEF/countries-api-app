import { IconSearch } from "@/assets/icons";
import style from "./Search.module.scss";

export const Search = () => {
  return (
    <form className={style.search} onSubmit={(e) => e.preventDefault()}>
      <label className={style.searchLabel}>
        <span className={style.searchIcon}>
          <IconSearch />
        </span>
        <input className={style.searchInput} type="text" placeholder="Search for a country..." />
      </label>
    </form>
  );
};
