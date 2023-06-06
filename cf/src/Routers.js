import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Checkout from "./components/Checkout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/check" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
