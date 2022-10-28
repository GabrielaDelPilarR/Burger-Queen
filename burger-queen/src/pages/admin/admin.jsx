import React from "react";

import Header from "../../components/Header/Header.jsx"
import admin from "../../img/admin.png"
import NavAdmin from "../../components/Nav/NavAdmin";
import group from "../../img/group.png"

export default function Admin() {


    return (

        <>
        <Header img= {admin} view= {"admin"} nav ={<NavAdmin></NavAdmin>} />
        <button>
            <img src={group} alt="group"></img>
            Crear Usuario 
        </button>
        </>

    )
    
}