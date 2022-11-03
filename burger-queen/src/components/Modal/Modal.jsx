import style from "./Modal.module.css";

function Modal({ children, state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            {children}
            <button
              className={style.buttonModal}
              onClick={() => onChangeState(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ModalSendOrder({ children, state }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>{children}</div>
        </div>
      )}
    </>
  );
}

function ModalCreateUsers({state,onChangeState}){
  return(
    <>
  {state &&
    <div className={style.backgroundModal}>
    <div className={style.modalCardUser}>
      <label>Nombre y apellido</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Contraseña</label>
      <input type="text"></input>
      <label>Funcion</label>
      <select multiple="multiple">
        <option>Mesero</option>
        <option>Cocinero</option>
      </select>

      <button className= {style.buttonUser} onClick={()=>onChangeState(false)}>Crear</button>
    </div>
    </div>
  }
    </>
  )
}

export { Modal, ModalSendOrder,ModalCreateUsers };
