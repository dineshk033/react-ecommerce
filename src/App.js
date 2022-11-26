import "./App.css";
import Footer from "./core/footer";
import Header from "./core/header";
import CartPage from "./pages/cart-page";
import Homepage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import SingleProduct from "./pages/single-product";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      {/* <Homepage />: */}
      <div className="container">
        <CartPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
