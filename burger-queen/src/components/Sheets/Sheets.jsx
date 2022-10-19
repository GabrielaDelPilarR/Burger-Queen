import { OrderButtons } from "../Button/Button";
import style from "./Sheets.module.css";

function Order({ id, client, products }) {
  const oneItem = products.map((product) => {
    return (
      <div className={style.oneItem} key={product.id}>
        <p>{product.product}</p>
        <p>{product.qyt}</p>
      </div>
    );
  });

  return (
    <div className={style.order}>
      <h3> Pedido #{id}</h3>
      <p> Cliente: {client}</p>
      {oneItem}
      <OrderButtons />
    </div>
  );
}

export default Order;
