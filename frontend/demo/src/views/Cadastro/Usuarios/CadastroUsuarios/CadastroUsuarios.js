import React, { useState, useEffect } from "react";
import "./CadastroUsuarios.css";
import api from "../../../../services/api.js";
import { Col, Row, Table } from "reactstrap";
import Input from "../../../../components/Input.js";
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
    } catch (e) {
      setError("Ocorreu um erro");
    }
    alert("Operação realizado com sucesso!");
    //    document.getElementsByClassName('form-control').value = "tetsa;.djhgh"
  }

  useEffect(() => {
    async function loadUsers() {
      const _id = localStorage["_id"];
      const response = await api.get("/api/users", {
        headers: {
          _id
        }
      });
      setUsers(response.data.users);
    }

    loadUsers();
  }, [users]);

  function handleRedirect(userId) {
    alert(userId);
    // history.push(`/Usuarios/AlterarUsuario/${user._id}`);
  }

  return (
    <React.Fragment>
      <Row>


      <div className="col-lg-6">
        <div className="form-header">
          <h2>Cadastro de Usuário {<i className="cui-people" />}</h2>
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

          <Row className="justify-content-center">
            <Col className="col-lg-4 col-md-4 col-sm-4">
              <button type="submit">Confirmar</button>
            </Col>
          </Row>
        </form>
      </div>
      {users.length > 0 ? (
          <Col className="col-lg-6">
            <Table className="table table-striped text-nowrap ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Login</th>
                  {/* <th>Password</th> */}
                  {/* <th /> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="table-info"
                    onDoubleClick={() => handleRedirect(user._id)}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    {/* <td>{user.password}</td> */}
                    {/* <td>
                      <a
                        href="javascript.void(0)"
                      >
                        Editar
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
      ) : (
        <div className="empty"></div>
      )}
      </Row>
    </React.Fragment>
  );
}
