import React from "react";
import { Card } from "react-bootstrap";
import "./SideBlock.css";

export const SideBlock = ({ title, children }) => {
  return (
    <Card className="root">
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
};
