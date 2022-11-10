import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import admin from "../../img/admin.png";
import NavAdmin from "../../components/Nav/NavAdmin";
import group from "../../img/group.png";
import style from "./Admin.module.css";
import edit from "../../img/edit.png";
import btn from "../../img/delete.png";
import { ModalCreateUsers } from "../../components/Modal/Modal.jsx";
import postUser from "../../functions/postUser.js";
import getUsers from "../../functions/getUsers.js";
import { putUser } from "../../functions/putUsers.js";
import deleteUsers from "../../functions/deleteUsers.js";
import close from "../../img/cerrar.png"
import { ModalDeleteUsers } from "../../components/Modal/Modal.jsx";

export default function Admin() {
  const [modalCreate, setModalCreate] = useState(false);
  const [passwoord, setPasswoord] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([])
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [newPassword, setNewPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" && email === "" && passwoord === "" && role === "") {
      setModalCreate(false);
    } else {
      const user = await postUser(name, email, passwoord, role)
      setUsers((prevState) => [...prevState, user])
      setModalCreate(false);
    }
  }


  useEffect(() => {
    getUsers(setUsers)
  }, [])






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
          <div>
            {users.map((user) => (
              <section key={user.id} className={style.users}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <button className={style.btnOptions} onClick={() => setModalEdit(user)}>
                  <img className={style.options} src={edit} alt={"edit"} ></img>
                </button>
                <button className={style.btnOptions} onClick={() =>deleteUsers(user.id)}>
                  <img className={style.options} src={btn} alt={"delete"}></img>
                </button>
              </section>
            ))}
          </div>
        </div>
      </div>
      <ModalCreateUsers state={modalCreate}>
        <button className={style.btnClose} onClick={() => setModalCreate(false)}>
          <img className={style.close} src={close} alt="close"></img>
        </button>
        <h2 className={style.createTitle}>Crea un nuevo usuario</h2>
        <form className={style.createUsersForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Usuario: </label>
            <input placeholder="User" value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              type="password"
              value={passwoord}
              placeholder="****"
              onChange={(e) => setPasswoord(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="function">Función: </label>
            <input placeholder="¿Waiter, chef or admin?" value={role} onChange={(e) => setRole(e.target.value)}></input>
          </div>
          <button className={style.buttonModal}>Crear</button>
        </form>
      </ModalCreateUsers>

      <ModalCreateUsers state={modalEdit}>
        <button className={style.btnClose} onClick={() => setModalEdit(false)}>
          <img className={style.close} src={close} alt="close"></img>
        </button>
        <h2>Editar</h2>
        <form className={style.createUsersForm} onSubmit={(e) => {
          e.preventDefault();
          putUser(modalEdit, newPassword, newRole, modalEdit.id)
          setModalEdit(false)
        }}>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              value={newPassword}
              placeholder="****"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="function">Función: </label>
            <input placeholder="¿Waiter, chef or admin?" value={newRole} onChange={(e) => setNewRole(e.target.value)}></input>
          </div>
          <button className={style.buttonModal}>Editar</button>
        </form>
      </ModalCreateUsers>

      {/* <ModalDeleteUsers state = {modalDelete}>
        <h3>¿Estas seguro que deseas eliminar </h3>
        <button onClick={(user)=> setUsers(deleteUsers(user.id))}>si</button>
        <button onClick={()=> setModalDelete(false)}
        >no</button>
      </ModalDeleteUsers> */}
    </>
  );
}
