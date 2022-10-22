import { useState } from "react";
import style from "./Sheets.module.css";
import postOrder from "../../functions/postOrders";
import { Modal, ModalSendOrder } from "../Modal/Modal";

function OrderSheet({ items, total, onDeleteItem, onSendOrder }) {
  const [client, setClient] = useState("");
  const [modalVisibilityError, setModalVisibilityError] = useState(false);
  const [modalVisibilityOrder, setModalVisibilityOrder] = useState(false);

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
    <>
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
          <button
            className={style.buttonOrder}
            onClick={() =>
              client !== "" && items.length > 0
                ? postOrder(client, items) && setModalVisibilityOrder(true)
                : setModalVisibilityError(true)
            }
          >
            Enviar pedido
          </button>
        </div>
      </div>

      <Modal
        state={modalVisibilityError}
        onChangeState={setModalVisibilityError}
      >
        <h2> Error </h2>
        <p> Por favor completa todos los datos. </p>
      </Modal>

      <ModalSendOrder state={modalVisibilityOrder}>
        <h2> Pedido enviado </h2>
        <p> El pedido ha sido enviado con éxito. </p>
        <button
          className={style.sendOrderButton}
          onClick={() => {
            setModalVisibilityOrder(false);
            onSendOrder();
            setClient("");
          }}
        >
          Enviar otra orden
        </button>
      </ModalSendOrder>
    </>
  );
}

export default OrderSheet;
