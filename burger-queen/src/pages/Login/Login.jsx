import React, { useState } from "react";
import logo from "../../img/logo2.png";
import style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigate = useNavigate();

  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setModalVisibility(true);
    }

    const API_URL = "http://localhost:3001/auth";

    axios
      .post(`${API_URL}`, { email, password })
      .then((res) => {
        if (res.status === 200) {
          const jwtObject = parseJwt(res.data.token);

          localStorage.setItem("users", JSON.stringify(res.data.token));

          if (jwtObject.payload.roles.mesero === true) {
            navigate("/products");
          }
          if (jwtObject.payload.roles.chef === true) {
            navigate("/chef");
          }
          if (jwtObject.payload.roles.admin === true) {
            navigate("/admin");
          }
        }
      })
      .catch((err) => setModalVisibility(true));
  };

  return (
    <section className={style.login}>
      <div className={style.backgroundLogo}>
        <img src={logo} alt="burger-queen-logo" className={style.logo} />
      </div>
      <div className={style.backgroundForm}>
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
