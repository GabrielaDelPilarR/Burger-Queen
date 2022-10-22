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
  const [productsInOrder, setProductsInOrder] = useState([]);

  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  const filteredProducts = products.filter((product) => product.type === type);

  const repeatedProduct = (id) => productsInOrder.find((obj) => obj.id === id);

  const addProducts = (product) => {
    if (repeatedProduct(product.id)) {
      const addQtyPrice = productsInOrder.map((item) => {
        if (item.id === product.id) {
          const newOrder = item;
          newOrder.quantity += 1;
          newOrder.price = product.price * newOrder.quantity;
        }
        return item;
      });
      setProductsInOrder(addQtyPrice);
    } else
      setProductsInOrder([...productsInOrder, { ...product, quantity: 1 }]);
    //console.log(order, "arrayorder");
  };

  const originalPrice = (id) =>
    products.find((product) => product.id === id).price;

  const deleteItem = (product) => {
    const deletedProduct = productsInOrder.reduce((acc, elem) => {
      if (elem.id === repeatedProduct(product.id).id) {
        if (elem.quantity > 1) {
          elem.quantity--;
          elem.price = originalPrice(product.id) * elem.quantity;
          acc.push(elem);
        }
      } else {
        acc.push(elem);
      }
      return acc;
    }, []);
    setProductsInOrder(deletedProduct);
  };

  const borraYaPlis = () => setProductsInOrder([])

  let total = 0;
  productsInOrder.forEach((item) => {
    total += item.price;
    return total;
  });

  return (
    <>
      <Header img={mesero} view={"waiter"} nav={<NavWaiter />} />
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
        <OrderSheet
          items={productsInOrder}
          total={total}
          onDeleteItem={deleteItem}
          onSendOrder={borraYaPlis}
        >
        </OrderSheet>
      </div>
    </>
  );
}
