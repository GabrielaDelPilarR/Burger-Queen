import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.module.css";
import Login from "./pages/Login/Login";
import Waiter from "./pages/Waiter/Waiter";
import Orders from "./pages/Waiter/ViewOrders";
import Chef from "./pages/Chef/Chef";
import ViewPreparedOrders from "./pages/Chef/ViewPrepared";
import AllOrders from "./pages/admin/AllOrders";
import Admin from "./pages/admin/Admin.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="products" element={<Waiter />} />
        <Route path="orders" element={<Orders />} />
        <Route path="chef" element={<Chef/>}/>
        <Route path="prepared" element={<ViewPreparedOrders/>}/>
        <Route path="all-orders" element={<AllOrders/>}/>
        <Route path="admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
