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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
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
