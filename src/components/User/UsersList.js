import React, { useState, useEffect } from "react";
import { Table, Alert, Button } from "reactstrap";
import { http } from "../../config";

const styles = {
  root: {
    margin: "1rem"
  },
  alert: {
    margin: "1rem"
  },
  title: {
    margin: "1.5rem 0 2rem 0"
  }
};

export const UsersList = () => {
  const [users, setUsers] = useState([
    // { id: 0, fullname: "manoela", email: "manoelarubin@gmail.com" }
  ]);

  useEffect(() => {
    http
      .get("users")
      .then(data => {
        setUsers(prevState => {
          return (prevState = [...users, ...data.data]);
        });
      })
      .catch(err => console.log(err));
  }, []);

  return users.length > 0 ? (
    <div style={styles.root}>
      <h4 style={styles.title}>Listagem de usuários</h4>
      <Table striped style={styles.table} size="sm" responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>nome completo</th>
            <th>email</th>
            <th>telefone</th>
            <th>celular</th>
            <th>website</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>{user.cellphone}</td>
                <td>{user.website}</td>
                <td>
                  <Button size="sm" color="primary">
                    editar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : (
    <Alert color="light">Nenhum usuário registrado.</Alert>
  );
};
