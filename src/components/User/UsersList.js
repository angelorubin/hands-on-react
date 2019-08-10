import React from "react";
import { Table, Alert } from "reactstrap";
import { http } from "../../config";
import { UserEdit } from "./UserEdit";
import { useDispatch, useSelector } from "react-redux";

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
  const users = useSelector(state => state.userReducer.users);

  return users.length > 0 ? (
    <div style={styles.root}>
      <h4 style={styles.title}>Listagem de usuários</h4>
      <Table size="sm" dark style={styles.table} responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
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
                <td>
                  <a
                    target="_blank"
                    href={user.website}
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </td>
                <td>
                  <UserEdit userId={user.id} users={users} onClick={""} />
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
