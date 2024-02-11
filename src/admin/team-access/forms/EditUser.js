import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update user
      </Button>
      <Button
        onClick={() => props.setEditing(false)}
        variant="secondary"
        className="button muted-button"
      >
        Cancel
      </Button>
    </Form>
  );
};

export default EditUser;
