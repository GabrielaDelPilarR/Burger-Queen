import React, { useState } from "react";
import logo from "../img/logo2.png";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setModalVisibility(true)
    }

    const API_URL = "http://localhost:3001/auth";

    axios
      .post(`${API_URL}`, { email, password })
      .then((res) => {
        console.log(res.data.token);
        if (res.status === 200) {
          localStorage.setItem("users", JSON.stringify(res.data.token));
          navigate("/products");
        }
      })
      .catch((err) => setModalVisibility(true));
  };

  return (
    <section className="login">
      <div className="background-logo">
        <img src={logo} alt="burger-queen-logo" className="logo" />
      </div>
      <div className="background-form">
        <h1> BURGER QUEEN </h1>
        <form onSubmit={handleSubmit}>
          <p> Ingresa tus credenciales </p>
          <input
            type="text"
            value={email}
            placeholder="email@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Entrar" />
        </form>
        
      </div>
      <Modal state={modalVisibility} onChangeState={setModalVisibility}>
        <h2>Error</h2>
        <p>Por favor, ingrese sus datos correctamente</p>
      </Modal>
    </section>
  );
}

export default Login;
