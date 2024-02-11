import React from "react";
import { Card, Button } from "react-bootstrap";

const CertificateCard = ({
  instituteName,
  courseName,
  courseImage,
  onViewCertificate,
  onEdit,
  onDelete,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={courseImage} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <Card.Text>Institute: {instituteName}</Card.Text>
        <Button variant="primary" onClick={onViewCertificate}>
          View Certificate
        </Button>
        <Button variant="secondary" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CertificateCard;
