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
import NewCertificate from "./certificates/NewCertificate";
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
            <NewCertificate
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CertificateWrapper;
