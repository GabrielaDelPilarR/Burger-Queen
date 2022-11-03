import { React, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import admin from "../../img/admin.png";
import NavAdmin from "../../components/Nav/NavAdmin";
import group from "../../img/group.png";
import style from "./Admin.module.css";
import edit from "../../img/edit.png";
import btn from "../../img/delete.png";
import { ModalCreateUsers } from "../../components/Modal/Modal.jsx";
import postUser from "../../functions/postUser.js";

export default function Admin() {
  const [modalCreate, setModalCreate] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <Header img={admin} view={"admin"} nav={<NavAdmin></NavAdmin>} />
      <div className={style.createUsers}>
        <button
          className={style.buttonUsers}
          onClick={() => setModalCreate(true)}
        >
          <img className={style.group} src={group} alt="group"></img>
          <p className={style.create}>Crear usuario</p>
        </button>
        <div className={style.containerUsers}>
          <div className={style.uh}>
            <h3>Usuario</h3>
            <h3>Email</h3>
            <h3>Funcion</h3>
            <h3>Editar</h3>
            <h3>Eliminar</h3>
          </div>
          <div className={style.users}>
            <p>Atena</p>
            <p>a.mesero@gmail.com</p>
            <p>mesero</p>
            <p>
              <img className={style.options} src={btn} alt={"delete"}></img>
            </p>
            <p>
              {" "}
              <img className={style.options} src={edit} alt={"edit"}></img>
            </p>
          </div>
        </div>
      </div>
      <ModalCreateUsers state={modalCreate}>
        <form className={style.createUsersForm} onSubmit={() => postUser(email,password, role)}>
          <div>
            <label htmlFor="user">Usuario: </label>
            <input placeholder="User"></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              value={password}
              placeholder="****"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="function">Función: </label>
            <input placeholder="¿Waiter, chef or admin?" value={role} onChange={(e) => setRole(e.target.value)}></input>
          </div>
          <button className={style.buttonModal} onClick={()=> setModalCreate(false)}>
            Crear
          </button>
        </form>
      </ModalCreateUsers>
    </>
  );
}
