import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import NavWaiter from "../components/Nav/NavWaiter.jsx";
import Order from "../components/Sheets/Sheets.jsx";
import style from "../css/Waiter.module.css";
import getOrders from "../functions/getOrders.js";
import mesero from "../img/mesero.png";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  const viewOrders = () => {
    return orders.map((one) => (
      <Order id={one.id} client={one.client} products={one.products} />
    ));
  };

  return (
    <>
      <Header img={mesero} view={'waiter'} nav={<NavWaiter/>}/>
      <div className={style.containerOrders}>{viewOrders()}</div>
    </>
  );
}
