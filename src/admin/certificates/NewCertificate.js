// NewCertificate.js
import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewCertificate = ({
  showModal,
  handleCloseModal,
  handleSubmit,
  handleChange,
  formData,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Certificate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="certificateName">
            <Form.Label>Certificate Name</Form.Label>
            <Form.Control
              type="text"
              name="certificateName"
              value={formData.certificateName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="instituteName">
            <Form.Label>Institute Name</Form.Label>
            <Form.Control
              type="text"
              name="instituteName"
              value={formData.instituteName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* New input field for live link */}
          <Form.Group controlId="liveLink">
            <Form.Label>Live Link</Form.Label>
            <Form.Control
              type="text"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* New input field for certificate image */}
          <Form.Group controlId="certificateImage">
            <Form.Label>Certificate Image</Form.Label>
            <Form.Control
              type="file"
              name="certificateImage"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewCertificate;
