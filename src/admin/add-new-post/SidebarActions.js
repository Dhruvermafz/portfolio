import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Card, ListGroup, Button } from "react-bootstrap";

const SidebarActions = ({ title }) => (
  <Card className="mb-3">
    <Card.Header className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </Card.Header>

    <Card.Body className="p-0">
      <ListGroup variant="flush">
        <ListGroup.Item className="p-3">
          <div className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Priority:</strong>{" "}
            <div className="ml-auto">
              <Form.Check
                inline
                label="top"
                name="priority"
                type="radio"
                id="priority-top"
              />
              <Form.Check
                inline
                label="normal"
                defaultChecked
                name="priority"
                type="radio"
                id="priority-normal"
              />
              <Form.Check
                inline
                label="popular"
                name="priority"
                type="radio"
                id="priority-popular"
              />
            </div>
          </div>
          <div className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">unsaved</strong>{" "}
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex px-3 border-0">
          <Button variant="outline-accent" size="sm">
            <i className="material-icons">save</i> Save Draft
          </Button>
          <Button variant="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

SidebarActions.defaultProps = {
  title: "Actions",
};

export default SidebarActions;
