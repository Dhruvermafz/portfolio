import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import MetaData from "../components/MetaData";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/button.css";
import { Link } from "react-router-dom";
import { MdSave } from "react-icons/md";
import axios from "axios";
import Particle from "../components/Particle";
import NewPortfolio from "./projects/NewPortfolio";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
const PortfolioWrapper = () => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    githubLink: "",
    liveLink: "",
    images: [],
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("caption", formData.caption);
      formDataToSend.append("githubLink", formData.githubLink);
      formDataToSend.append("liveLink", formData.liveLink);
      formDataToSend.append("tags", formData.tags);
      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append("images", formData.images[i]);
      }

      const response = await axios.post(
        "https://api-portfolio-shuz.onrender.com/api/project/add",
        formDataToSend
      );

      console.log("Response:", response.data);
      setShowModal(false); // Close the modal after successful submission
      // Handle successful submission, e.g., show a success message
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="portfolio-wrapper">
      <MetaData title="Portfolios" />
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
              <strong className="purple">Projects</strong>
            </h1>
          </Col>

          <Col sm={4} className="addPortfolio">
            {/* Button to toggle the modal */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Add Project
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>New Project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter post title"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Caption</Form.Label>
                    <Form.Control
                      type="text"
                      name="caption"
                      value={formData.caption}
                      onChange={handleChange}
                      placeholder="Enter portfolio caption in less than 20 words"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>GitHub Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleChange}
                      placeholder="Enter GitHub link"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Live Link</Form.Label>
                    <Form.Control
                      type="text"
                      name="liveLink"
                      value={formData.liveLink}
                      onChange={handleChange}
                      placeholder="Enter live link"
                    />
                  </Form.Group>

                  <Form.Group controlId="portfolioImage">
                    <Form.Label>Portfolio Images</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      onChange={handleFileChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="tags">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="Enter Tags"
                    />
                  </Form.Group>
                  <Button type="submit">
                    <MdSave /> Save
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

export default PortfolioWrapper;
