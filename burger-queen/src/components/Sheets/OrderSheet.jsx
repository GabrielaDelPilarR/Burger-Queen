import { useState } from "react";
import style from "./Sheets.module.css";
import postOrder from "../../functions/postOrders";

function OrderSheet({ items, total, onDeleteItem }) {
  const [client, setClient] = useState("");

  const fullOrder = items.map((item) => {
    return (
      <div className={style.item} key={item.id}>
        <p className={style.itemName}> {item.name}</p>
        <p> S/.{item.price} </p>
        <p> {item.quantity} </p>
        <button
          className={style.deleteProduct}
          onClick={() => onDeleteItem(item)}
        >
          <hr className={style.delete}></hr>
        </button>
      </div>
    );
  });

  return (
    <div className={style.orderSheet}>
      <label htmlFor="client"> Cliente </label>
      <input
        type="text"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <div className={style.containerItem}>{fullOrder}</div>
      <div className={style.item}>
        <p> TOTAL </p>
        <p> s/.{total} </p>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.buttonOrder} onClick={() => postOrder(client, items)}> Enviar pedido </button>
      </div>
    </div>
  );
}

export default OrderSheet;
