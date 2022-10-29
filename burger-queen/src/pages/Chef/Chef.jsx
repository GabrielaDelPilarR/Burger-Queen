import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavChef from "../../components/Nav/NavChef";
import { ChefOrders } from "../../components/Sheets/Sheets";
import getOrders from "../../functions/getOrders";
import style from "./Chef.module.css";
import chef from "../../img/chef.png";
import {putOrders} from "../../functions/putOrders";

function Chef() {
  const [allOrders, setAllOrders] = useState([]);
 
  useEffect(() => {
    getOrders(setAllOrders);
  }, []);

  const handleUpdate = async(allOrders, order, id, text)=>{
    const newAllOrders = [...allOrders]
    const response = await putOrders( order, id,text)
    console.log(response)
    if(response){
      setAllOrders(newAllOrders)
    }
  }

  const newOrders = allOrders.filter(
    (oneOrder) => oneOrder.status === "pending"
  );
  
   //Hacer una nueva funcion donde se cambie desde el front el status y despues ya hacerle el setAllOrders

  /*const sortNewOrders = newOrders.sort((a, b) =>
      new Date(a.dateEntry).getTime() > new Date(b.dateEntry).getTime() );

  console.log(sortNewOrders)*/

  return (
    <>
      <Header img={chef} view={"chef"} nav={<NavChef />} />
      <div className={style.containerPendingOrders}>
        {newOrders.map((oneOrder,i) => (
          <ChefOrders
            key={i}
            id={oneOrder.id}
            client={oneOrder.client}
            products={oneOrder.products}
            status={oneOrder.status}
            onPutOrders={() => handleUpdate(allOrders,oneOrder, oneOrder.id,"delivering")}
          />
        ))}
      </div>
    </>
  );
}

export default Chef;
