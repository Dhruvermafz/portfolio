import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Group controlId="formName">
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Control
          type="email"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add new user
      </Button>
    </Form>
  );
};

export default AddUser;
