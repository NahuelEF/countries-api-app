import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layout";
import { Details, Home, NotFound } from "./pages";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="country/:name" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
