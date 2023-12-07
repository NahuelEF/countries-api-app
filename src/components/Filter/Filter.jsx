import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@/assets/icons";
import style from "./Filter.module.scss";

export const Filter = ({ placeholder, options }) => {
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

  /* const onOptionClick = (option) => setSelectedValue(option); */

  const isSelected = (option) => (selectedValue && selectedValue.value) === option.value;

  const activeLabel = selectedValue ? selectedValue.label : placeholder;

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
            <li
              key={option.value}
              className={`${style.filterOption} ${isSelected(option) ? style.selected : ""}`.trim()}
              onClick={() => setSelectedValue(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
