import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavWaiter from "../../components/Nav/NavWaiter.jsx";
import getOrders from "../../functions/getOrders.js";
import mesero from "../../img/mesero.png";
import style from "./Waiter.module.css"
import { ChefOrders } from "../../components/Sheets/Sheets";
import { putOrdersToDelivered } from "../../functions/putOrders";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  const ordersToDeliver = allOrders.filter(
    (oneOrder) => oneOrder.status === "delivering"
  );
  

  return (
    <>
      <Header img={mesero} view={'waiter'} nav={<NavWaiter/>}/>
      <div className={style.containerOrdersToDeliver}>
        {ordersToDeliver.map(oneOrder => (
          <ChefOrders key={oneOrder.id}
          id={oneOrder.id}
          client={oneOrder.client}
          products={oneOrder.products}
          status={oneOrder.status}
          onPutOrders={() => putOrdersToDelivered(oneOrder, oneOrder.id)}/>
        ))}
      </div>
    </>
  );
}
