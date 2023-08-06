import { IconArrowDown } from "@/assets/icons";
import { useEffect, useState } from "react";
import style from "./Filter.module.scss";

export const Filter = ({ label, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const activeLabel = selectedValue ? selectedValue.label : label;

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const onOptionClick = (option) => setSelectedValue(option);

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className={style.filter}>
      <div onClick={handleClick} className={style.filterLabel}>
        {activeLabel}
        <span>
          <IconArrowDown />
        </span>
      </div>
      {showMenu && (
        <ul className={style.filterOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => onOptionClick(option)}
              className={`${style.filterOption} ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
