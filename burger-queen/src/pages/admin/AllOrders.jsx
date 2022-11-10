import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import NavAdmin from "../../components/Nav/NavAdmin";
import admin from "../../img/admin.png";
import style from "./Admin.module.css";
import getOrders from "../../functions/getOrders";

function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  return (
    <>
      <Header img={admin} view={"admin"} nav={<NavAdmin />} />
      <div className={style.containerAllOrders}>
        <div className={style.allOrdersTable}>
          <div className={style.th}>
            <h3>Cliente</h3>
            <h3>Estado</h3>
            <h3>Total</h3>
          </div>
          <div className={style.containerOrders}>
            {allOrders.map((order) => {
              const totalPerOrder = (productsPerOrder) => {
                return productsPerOrder
                  .map((oneProduct) => oneProduct.price)
                  .reduce((prev, curr) => prev + curr, 0);
              };

              return (
                <div className={style.oneOrder} key={order.id}>
                  <p>{order.client}</p>
                  <p>{order.status}</p>
                  <p>S/.{totalPerOrder(order.products)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllOrders;
