import {React, useState} from "react";
import Header from "../../components/Header/Header.jsx"
import admin from "../../img/admin.png";
import NavAdmin from "../../components/Nav/NavAdmin";
import group from "../../img/group.png";
import style from "./Admin.module.css";
import edit from "../../img/edit.png";
import btn from "../../img/delete.png";
import  {ModalCreateUsers}  from "../../components/Modal/Modal.jsx";

export default function Admin() {
    const[ modalCreate , setModalCreate] = useState(false)

    return (

        <>
        <Header img= {admin} view= {"admin"} nav ={<NavAdmin></NavAdmin>} />
        <div className={style.createUsers}>
            <button className={style.buttonUsers} onClick={()=> setModalCreate(true) }>
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
                    <p><img className={style.options}src={btn} alt={"delete"}></img></p>
                    <p> <img className={style.options} src={edit} alt={"edit"}></img></p>

                </div>
            </div>

        </div>
        <ModalCreateUsers
         state={modalCreate}
         onChangeState={setModalCreate}
         >
        </ModalCreateUsers>
        </>

    )
    
}