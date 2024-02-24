import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { FaBlog, FaPortrait, FaCertificate } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { API_BASE_URL } from "../config";
import Particle from "../components/Particle";
import { AiOutlineTeam } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import TagsInput from "../components/Tags";
import MetaData from "../components/MetaData";
const AdminWrapper = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const nameRef = useRef("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleUser = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const newProject = { name };

    try {
      const response = await fetch(`${API_BASE_URL}/addSkill`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      const data = await response.json();

      if (data.insertedId) {
        alert("User Inserted Successfully");
        e.target.reset(); // Clear form input
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="admin-wrapper">
      <MetaData title="Admin" />
      <Particle />
      <h1 className="admin-header">
        <strong className="purple">Welcome Boss</strong>
      </h1>
      <Row
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="admin-bars"
      >
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-landmark">Certificates</Tooltip>}
          >
            <Link to="/admin/certificates">
              <FaCertificate />
            </Link>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-blog">Blogs</Tooltip>}
          >
            <Link to="/admin/blogs">
              <FaBlog />
            </Link>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-projects">Projects</Tooltip>}
          >
            <Link to="/admin/projects">
              <FaPortrait />
            </Link>
          </OverlayTrigger>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-team-access">Team Access</Tooltip>}
          >
            <Link to="/admin/team-access">
              <AiOutlineTeam />
            </Link>
          </OverlayTrigger>
        </Col>
      </Row>

      <Row
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="extras-wrapper"
      >
        <Container>
          <h1 className="admin-header">
            <strong className="purple">Extras</strong>
          </h1>
          <Row className="mt-5 p-5">
            <Col md={6}>
              <div className="mt-5 text-center">
                <h2> Add New Skill</h2>
                <div className="d-flex justify-content-center mb-4">
                  <div className="border-bottom w-25 text-bottom border-info"></div>
                </div>
                <Form onSubmit={handleUser}>
                  <Row className="w-75">
                    <Col md className="mb-3">
                      <Form.Group controlId="tagsAdd">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Skill Name"
                          ref={nameRef}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md className="text-center">
                      <Button type="submit" className="btn btn-primary mt-4">
                        Send to Db
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default AdminWrapper;
