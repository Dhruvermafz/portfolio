import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { MdSave, MdPostAdd } from "react-icons/md";
import { RiEyeLine } from "react-icons/ri";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPortfolio = () => {
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
        "http://localhost:8000/api/project/new",
        formDataToSend
      );

      console.log("Response:", response.data);
      // Handle successful submission, e.g., show a success message
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <Container className="portfolio-new">
      <Row>
        <Col lg={8}>
          <Card className="container">
            <div className="card-header">
              <Form.Label>
                <h2>New Project</h2>
              </Form.Label>
            </div>

            <div className="tab-content p-4 sm:p-5">
              <div className="space-y-5">
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label className="portfolio-label">Title</Form.Label>
                    <Form.Control
                      className="portfolio-title-content"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter post title"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="portfolio-label">Caption</Form.Label>
                    <Form.Control
                      className="portfolio-caption-content"
                      type="text"
                      name="caption"
                      value={formData.caption}
                      onChange={handleChange}
                      placeholder="Enter portfolio caption in less than 20 words"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="portfolio-label">
                      GitHub Link
                    </Form.Label>
                    <Form.Control
                      className="github-link-content"
                      type="link"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleChange}
                      placeholder="Enter GitHub link"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="portfolio-label">
                      Live Link
                    </Form.Label>
                    <Form.Control
                      className="live-link-content"
                      type="link"
                      name="liveLink"
                      value={formData.liveLink}
                      onChange={handleChange}
                      placeholder="Enter live link"
                    />
                  </Form.Group>

                  <Form.Group controlId="portfolioImage">
                    <Form.Label className="portfolio-label">
                      Portfolio Images
                    </Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      onChange={handleFileChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="tags">
                    <Form.Label className="portfolio-label">Tags</Form.Label>
                    <Form.Control
                      className="mt-1.5 w-full"
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="Enter Tags"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button type="submit" className="save-button">
                      <MdSave className="h-5 w-5 mr-2" /> Save
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPortfolio;
