import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavWaiter from "../../components/Nav/NavWaiter.jsx";
import getOrders from "../../functions/getOrders.js";
import mesero from "../../img/mesero.png";
import style from "./Waiter.module.css"
import { ChefOrders } from "../../components/Sheets/Sheets";
import { putOrders } from "../../functions/putOrders";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  const handleUpdateOrders = async(allOrders, order, id, text)=>{
    const newAllOrders = [...allOrders]
    const response = await putOrders( order, id,text)
    console.log(response)
    if(response){
      setAllOrders(newAllOrders)
    }
  }


  const ordersToDeliver = allOrders.filter(
    (oneOrder) => oneOrder.status === "delivering"
  );
  

  return (
    <>
      <Header img={mesero} view={'waiter'} nav={<NavWaiter/>}/>
      <div className={style.containerOrdersToDeliver}>
        {ordersToDeliver.map((oneOrder,i) => (
          <ChefOrders key={i}
          id={oneOrder.id}
          client={oneOrder.client}
          products={oneOrder.products}
          status={oneOrder.status}
          onPutOrders={() => handleUpdateOrders(allOrders,oneOrder, oneOrder.id,"delivered")}/>
        ))}
      </div>
    </>
  );
}
