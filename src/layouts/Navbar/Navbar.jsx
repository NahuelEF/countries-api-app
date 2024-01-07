import { Filter, Search } from "@/components";
import style from "./Navbar.module.scss";

const options = [
  { value: "", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Search />
      <Filter options={options} initialValue="Filter by Region" />
    </nav>
  );
};
