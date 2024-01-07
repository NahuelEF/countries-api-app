import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowDownIcon } from "@/assets/icons";
import style from "./Filter.module.scss";
import { SEARCH_PARAM } from "@/constants";

export const Filter = ({ initialValue, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, [showMenu]);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleFilterChange = (option) => {
    if (option.value.length === 0) {
      searchParams.delete(SEARCH_PARAM.REGION);
    } else {
      searchParams.set(SEARCH_PARAM.REGION, option.value);
    }

    setSearchParams(searchParams, { replace: true });

    setSelectedValue(option);
  };

  const activeLabel = selectedValue ? selectedValue.label : initialValue;

  return (
    <div className={style.filter}>
      <div className={style.filterLabel} onClick={handleClick}>
        {activeLabel}
        <span>
          <ArrowDownIcon />
        </span>
      </div>
      {showMenu && (
        <ul className={style.filterOptions}>
          {options.map((option) => (
            <li key={option.value}>
              <button className={style.filterOption} onClick={() => handleFilterChange(option)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
