import { useState } from "react";
import { SearchIcon } from "@/assets/icons";
import style from "./Search.module.scss";

export const Search = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = text.trim();

    if (newText !== "") {
      console.log(newText);
      setText("");
    }
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <form className={style.search} onSubmit={handleSubmit}>
      <label className={style.searchLabel} htmlFor="search">
        <span className={style.searchIcon}>
          <SearchIcon />
        </span>
        <input
          id="search"
          className={style.searchInput}
          type="text"
          placeholder="Search for a country..."
          value={text}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};
