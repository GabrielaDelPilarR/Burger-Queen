import React, { useState, useEffect } from "react";
import getOrders from "../../functions/getOrders";
import Header from "../../components/Header/Header";
import NavChef from "../../components/Nav/NavChef";
import chef from "../../img/chef.png";
import style from "./Chef.module.css";
import { DeliveringOrders } from "../../components/Sheets/Sheets";

function ViewPreparedOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  const deliveringOrders = allOrders.filter(
    (oneOrder) => oneOrder.status === "delivering"
  );

  return (
    <>
      <Header img={chef} view={"chef"} nav={<NavChef />} />
      <div className={style.containerDeliveringOrders}>
        {deliveringOrders.map((oneOrder) => (
          <DeliveringOrders
            key={oneOrder.id}
            id={oneOrder.id}
            client={oneOrder.client}
            products={oneOrder.products}
            status={oneOrder.status}
          />
        ))}
      </div>
    </>
  );
}

export default ViewPreparedOrders;
