import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavChef from "../../components/Nav/NavChef";
import { ChefOrders } from "../../components/Sheets/Sheets";
import getOrders from "../../functions/getOrders";
import style from "./Chef.module.css";
import chef from "../../img/chef.png";
import putOrders from "../../functions/putOrders";

function Chef() {
  const [allOrders, setAllOrders] = useState([]);
 
  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  const newOrders = allOrders.filter(
    (oneOrder) => oneOrder.status === "pending"
  );
  

  /*const sortNewOrders = newOrders.sort((a, b) =>
      new Date(a.dateEntry).getTime() > new Date(b.dateEntry).getTime() );

  console.log(sortNewOrders)*/

  return (
    <>
      <Header img={chef} view={"chef"} nav={<NavChef />} />
      <div className={style.containerPendingOrders}>
        {newOrders.map((oneOrder) => (
          <ChefOrders
            key={oneOrder.id}
            id={oneOrder.id}
            client={oneOrder.client}
            products={oneOrder.products}
            status={oneOrder.status}
            onPutOrders={() => putOrders(oneOrder, oneOrder.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Chef;
