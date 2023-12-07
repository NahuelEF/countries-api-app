import { Filter, Search } from "@/components";
import style from "./Navbar.module.scss";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Search />
      <Filter options={options} placeholder="Filter by Region" />
    </nav>
  );
};
