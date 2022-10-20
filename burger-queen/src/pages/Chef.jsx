import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NavChef from "../components/Nav/NavChef";
import { ChefOrders } from "../components/Sheets/Sheets";
import getOrders from "../functions/getOrders";
import style from "../css/Chef.module.css"
import chef from "../img/chef.png";

function Chef() {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    getOrders(setNewOrders);
  }, []);

  return (
    <>
      <Header img={chef} view={"chef"} nav={<NavChef />}/>
      <div className={style.containerPendingOrders}>
        {newOrders.map((oneOrder) => (
         <ChefOrders key={oneOrder.id} id={oneOrder.id} client={oneOrder.client} products={oneOrder.products} status={oneOrder.status}/> 
      ))}
      </div>
      
    </>
  );
}

export default Chef;
