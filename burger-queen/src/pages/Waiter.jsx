/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import OrderSheet from "../components/Sheets/OrderSheet.jsx";
import style from "../css/Waiter.module.css";
import Card from "../components/Card.jsx";
import peticionHTTP from "../functions/getProducts";
import mesero from "../img/mesero.png";
import NavWaiter from "../components/Nav/NavWaiter.jsx";

export default function Waiter() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("Breakfast");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  const filteredProducts = products.filter((product) => product.type === type);
  
  const uniqueProduct = (id) => {
      const unique = order.find((obj) => obj.id === id);
      return unique;
    };

  const addProducts = (product) => {

    if (uniqueProduct(product.id)) {
      const addQtyPrice = order.map((item) => {
        if (item.id === product.id) {
          const newOrder = item;
          newOrder.quantity += 1;
          newOrder.price = product.price * newOrder.quantity;
        }
        return item;
      });
      setOrder(addQtyPrice);
    } else setOrder([...order, { ...product, quantity: 1 }]);
    //console.log(order, "arrayorder");
  };

  const originalPrice = (id) => products.find( product => product.id === id).price

  const deleteItem = (product) => {
    if(uniqueProduct(product.id)){
      const deleteProd= order.map(obj => {
        if(obj.id === product.id){
          const item = obj;
          if(item.quantity > 1) {
            item.quantity--;
            item.price = originalPrice(product.id) * item.quantity
          } if (item.quantity === 1) {
            order.filter(elem => elem.id !==item.id)
          }
        } 
        return obj
      })
      setOrder(deleteProd)
    } else setOrder([...order, { ...product, quantity: 1 }]);
   };

  let total = 0;
  order.map((item) => {
    total += item.price;
    return total;
  });

  return (
    <>
      <Header img={mesero} view={'waiter'} nav={<NavWaiter/>}/>
      <div className={style.container}>
        <ul className={style.buttonContainer}>
          <li className={style.buttonMenu} onClick={() => setType("Breakfast")}>
            Desayuno
          </li>
          <li className={style.buttonMenu} onClick={() => setType("Lunch")}>
            Almuerzo
          </li>
          <li
            className={style.buttonMenu}
            onClick={() => setType("Acompañamiento")}
          >
            Acompañamiento
          </li>
        </ul>
        <div className={style.menuContainer}>
          {filteredProducts.map((product) => (
            <Card
              product={product}
              key={product.id}
              onAddButtonClick={addProducts}
            />
          ))}
        </div>
        <OrderSheet items={order} total={total} onDeleteItem={deleteItem} />
      </div>
    </>
  );
}
