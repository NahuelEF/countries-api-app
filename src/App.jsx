import { RouterProvider } from "react-router-dom";
import { route } from "./routes";

export default function App() {
  return <RouterProvider router={route} />;
}
