import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/cart-page";
import Homepage from "./pages/home-page";
import Layout from "./pages/layout";

import LoginPage from "./pages/login-page";
import SearchPage from "./pages/search-page";
import SingleProduct from "./pages/single-product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:productId" element={<SingleProduct />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
