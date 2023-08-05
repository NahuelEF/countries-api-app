import { Header, Search, Filter } from "@/components";
import "./App.scss";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <nav className="nav">
          <Search />
          <Filter options={options} label="Filter by Region" />
        </nav>
      </main>
    </>
  );
}

export default App;
