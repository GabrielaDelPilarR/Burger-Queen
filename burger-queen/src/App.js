import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.module.css";
import Login from "./pages/Login/Login";
import Waiter from "./pages/Waiter/Waiter";
import Orders from "./pages/ViewOrders";
import Chef from "./pages/Chef/Chef";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="products" element={<Waiter />} />
        <Route path="orders" element={<Orders />} />
        <Route path="chef" element={<Chef/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
