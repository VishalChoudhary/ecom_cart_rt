import Header from "./components/Header";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./components/CardData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
