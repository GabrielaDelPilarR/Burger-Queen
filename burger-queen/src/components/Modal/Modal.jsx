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

function ModalCreateUsers({ state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            <h2>Crea un nuevo usuario</h2>
            <form className={style.createUsersForm}>
              <div>
              <label htmlFor="user">Usuario: </label>
              <input placeholder="User"></input>
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input placeholder="email@example.com"></input>
            </div>
            <div>
              <label htmlFor="password">Contraseña: </label>
              <input placeholder="****"></input>
            </div>
            <div>
              <label htmlFor="function">Función: </label>
              <input placeholder="¿Waiter, chef or admin?"></input>
            </div>
            <button
              className={style.buttonModal}
              onClick={() => onChangeState(false)}
            >
              Crear
            </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export { Modal, ModalSendOrder, ModalCreateUsers };
