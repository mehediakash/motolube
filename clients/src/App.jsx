import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
