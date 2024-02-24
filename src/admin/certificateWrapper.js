import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Modal,
  Form,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Particle from "../components/Particle";
import { useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import MetaData from "../components/MetaData";
const CertificateWrapper = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    certificateName: "",
    instituteName: "",
    liveLink: "", // New field for live link
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleCloseModal();
  };

  return (
    <div className="portfolio-wrapper">
      <MetaData title="Certfications" />
      <Container className="mt-5">
        <Row>
          <Col sm={4} className="portfolio-search">
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <AiOutlineSearch />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
              </InputGroup>
            </Form>
          </Col>

          <Col sm={4}>
            <h1 className="admin-header">
              <strong className="purple">Certificate</strong>
            </h1>
          </Col>

          <Col sm={4} className="addPortfolio">
            <Button variant="primary" onClick={() => handleShowModal(true)}>
              Add certificate
            </Button>
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

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CertificateWrapper;
