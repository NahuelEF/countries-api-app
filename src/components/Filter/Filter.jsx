import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "@/assets/icons";
import style from "./Filter.module.scss";

export const Filter = ({ initialValue, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

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
            <li key={option.value} onClick={() => setSelectedValue(option)}>
              <Link to={`?region=${option.value}`} className={style.filterOption}>
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
