import React from "react";
import { Table, Button } from "react-bootstrap";

const UserTable = (props) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default UserTable;
