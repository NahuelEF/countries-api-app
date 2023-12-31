import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "@/layouts";
import { Details, Error, Home, detailsLoader, homeLoader } from "@/pages";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="country/:countryId" element={<Details />} loader={detailsLoader} />
    </Route>
  )
);
