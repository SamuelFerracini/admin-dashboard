import React, { useState } from "react";
import logo from "../../assets/img/brand/logo.svg";
import "./Login.css";
import api from "../../services/api.js";
import { login } from "../../services/Auth.js";
import { Col, Row, Table } from "reactstrap";


export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function changeBorderColor(className, color) {
    document.getElementsByClassName(className)[0].style.borderColor = color;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/users/login", {
        headers: {
          username,
          password
        }
      });
      console.log(response);
      if (response.data.code == "002") {
        // setError("Usuário/Senha inválido");
        throw new Error("Usuário/Senha inválido");
      }
      login(response.data.token);
      localStorage.setItem("username", response.data.user[0].name);
      localStorage.setItem("_id", response.data.user[0]._id);
      history.push("/");
    } catch (e) {
      setError(
        "Ocorreu um erro durante a autenticação, entre em contato com seu administrador"
      );
      changeBorderColor("i-l", "red");
      changeBorderColor("i-p", "red");
    }
  }

  return (
    <div className="geral">
      <div className="login-page">
        <Row className="justify-content-center">
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
              <img src={logo} alt="Unilever" />
              <p style={{ color: "red" }}>{error}</p>
              <div className="">
                <p>{}</p>
              </div>
              <input
                className="i-l"
                type="text"
                placeholder="Digite seu login"
                required
                onFocus={() => {
                  changeBorderColor("i-l", "darkblue");
                }}
                onBlur={() => {
                  changeBorderColor("i-l", "transparent");
                }}
                onChange={e => setUsername(e.target.value.toLocaleLowerCase())}
              />
              <input
                className="i-p"
                type="password"
                placeholder="Digite sua senha"
                required
                onFocus={() => {
                  changeBorderColor("i-p", "darkblue");
                }}
                onBlur={() => {
                  changeBorderColor("i-p", "transparent");
                }}
                onChange={e => setPassword(e.target.value.toLowerCase())}
              />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </Row>
      </div>
    </div>
  );
}
