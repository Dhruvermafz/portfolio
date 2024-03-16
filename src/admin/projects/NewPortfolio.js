import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { MdSave } from "react-icons/md";
import axios from "axios";
import "../../styles/portfolio.css";
const NewPortfolio = ({ showModal, setShowModal }) => {
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
            <Form.Control type="file" multiple onChange={handleFileChange} />
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
  );
};

export default NewPortfolio;
