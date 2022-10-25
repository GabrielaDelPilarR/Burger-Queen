import style from "./Modal.module.css";

function Modal({ children, state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            {children}
            <button className={style.buttonModal} onClick={() => onChangeState(false)}> Cerrar </button>
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
            <div className={style.modalCard}>
              {children}
            </div>
          </div>
        )}
      </>
    );
  }

export {Modal, ModalSendOrder};
