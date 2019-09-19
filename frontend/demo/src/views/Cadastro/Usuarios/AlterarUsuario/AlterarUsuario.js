import React, { useState, useEffect } from "react";
import "./AlterarUsuario.css";
import api from "../../../../services/api.js";
import { Input } from "reactstrap";

export default function CadastroUsuarios({ match }) {
  var [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/api/users/${match.params._id}`, {
        headers: {
          _id: match.params._id
        }
      });

    }
    console.log(response);

    loadUser();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.put("/api/users/login", {
        headers: {
          username,
          password
        }
      });
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
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="text-name"/>
        <Input name="text-username" />
        <Input name="text-password"/>
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}
