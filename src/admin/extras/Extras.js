import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../config";
const Extras = () => {
  const [skillName, setSkillName] = useState("");
  const nameRef = useRef(null);

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/skills/add`, {
        name: skillName,
      });
      console.log("Skill added:", response.data);
      // Optionally, you can clear the input field or show a success message
      setSkillName("");
      nameRef.current.focus();
    } catch (error) {
      console.error("Error adding skill:", error);
      // Handle error, show an error message, etc.
    }
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/resume/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Resume uploaded:", response.data);
      // Optionally, you can show a success message
    } catch (error) {
      console.error("Error uploading resume:", error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <Container>
      <h1 className="admin-header">
        <strong className="purple">Extras</strong>
      </h1>
      <Row className="mt-5 p-5">
        <Col md={6}>
          <div className="mt-5 text-center">
            <h2>Add New Skill</h2>
            <div className="d-flex justify-content-center mb-4">
              <div className="border-bottom w-25 text-bottom border-info"></div>
            </div>
            <Form onSubmit={handleSkillSubmit}>
              <Row className="w-75">
                <Col md className="mb-3">
                  <Form.Group controlId="tagsAdd">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Skill Name"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                      ref={nameRef}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md className="text-center">
                  <Button type="submit" className="btn btn-primary mt-4">
                    Add Skill
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-5 text-center">
            <h2>Upload Resume</h2>
            <div className="d-flex justify-content-center mb-4">
              <div className="border-bottom w-25 text-bottom border-info"></div>
            </div>
            <Form>
              <Row className="w-75">
                <Col md className="mb-3">
                  <Form.Group controlId="resumeUpload">
                    <Form.Control
                      type="file"
                      name="resume"
                      onChange={handleResumeUpload}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md className="text-center">
                  <Button className="btn btn-primary mt-4">Upload</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Extras;
