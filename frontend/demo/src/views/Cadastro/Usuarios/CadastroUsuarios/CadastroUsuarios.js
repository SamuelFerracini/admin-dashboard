import React, { useState, useEffect } from "react";
import "./CadastroUsuarios.css";
import api from "../../../../services/api.js";
import { Col, Row, Table } from "reactstrap";
import Input from "../../../../components/Input.js";
import Button from "../../../../components/Button";
import { username } from "../../../../services/Auth";


export default function CadastroUsuarios({ history }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/users", {
        headers: {
          name,
          username,
          password
        }
      });
      setUsername("");
      setPassword("");
      setName("");
      setUsers(response.data.users);
      alert("Operação realizado com sucesso!");
    } catch (e) {
      setError("Ocorreu um erro");
    }
  }

  useEffect(() => {
    async function loadUsers() {
      const _id = localStorage["_id"];
      const response = await api.get("/api/users", {
        headers: {
          _id
        }
      });
      // if (response.data.error) setUsers([]);
      setUsers(response.data.users);
      // PubSub.publish("loading-data", false);
    }
    loadUsers();
  }, []);

  function handleRedirect(userId) {
    alert(userId);
    // history.push(`/Usuarios/AlterarUsuario/${user._id}`);
  }

  return (
    <React.Fragment>
      <Row>
        <Col className="col-lg-6">
          <div className="form" style={{ background: "white", padding: 10 }}>
            <div className="form-header">
              <h3>Cadastro de Usuário {<i className="cui-people" />}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              <Row className="justify-content-center">
                <Input
                  label="Nome"
                  id="nome"
                  type="text"
                  name="nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required={true}
                />
              </Row>
              <Row className="justify-content-center">
                <Input
                  label="Login"
                  id="login"
                  type="text"
                  name="login"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Row>
              <Row className="justify-content-center">
                <Input
                  label="Senha"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Row>
              <Button type="submit" label="Confirmar" />
            </form>
          </div>
        </Col>
        {users.length > 0 ? (
          <Col className="col-lg-6">
            <Table className="table table-striped text-nowrap table-borderless table-hover">
              <thead>
                <tr className="table-header">
                  <th>#</th>
                  <th>Nome</th>
                  <th>Login</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="table-content"
                  onDoubleClick={() => handleRedirect(user._id)}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        ) : (
        <div>

        </div>  
        )}
      </Row>
    </React.Fragment>
  );
}
