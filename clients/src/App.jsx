import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./pages/home";
import ShopPage from "./pages/shopPage";
import Productpage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkout";
import OrderSuccessPage from "./pages/orderSucces";
import BrandShop from "./pages/brandShop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="product" element={<Productpage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orderSucces" element={<OrderSuccessPage />} />
      <Route path="/brandshop" element={<BrandShop />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
