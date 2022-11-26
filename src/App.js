import "./App.css";
import Footer from "./core/footer";
import Header from "./core/header";
import Homepage from "./pages/home-page";
import SearchPage from "./pages/search-page";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      {/* <Homepage />: */}
      <div className="container">
        <SearchPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
