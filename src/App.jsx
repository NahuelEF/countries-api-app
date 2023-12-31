import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import "./App.scss";

export default function App() {
  return <RouterProvider router={route} />;
}
