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

import MetaData from "../components/MetaData";
import Extras from "./extras/Extras";
const AdminWrapper = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const nameRef = useRef("");
  const resumeRef = useRef("");
  const [tagName, setTagName] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const greetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return "Good Morning";
    } else if (currentTime < 16) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  const message = greetingMessage();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleTagSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const newUser = { name };

    try {
      const response = await fetch(`${API_BASE_URL}/addUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

      if (data.insertedId) {
        alert("User Inserted Successfully");
        nameRef.current.value = ""; // Clear form input
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleResumeSubmit = async (e) => {
    e.preventDefault();
    const resumeLink = resumeRef.current.value;
    const newResume = { resumeLink };

    try {
      const response = await fetch(`${API_BASE_URL}/addResume`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newResume),
      });
      const data = await response.json();

      if (data.insertedId) {
        alert("Resume Inserted Successfully");
        resumeRef.current.value = ""; // Clear form input
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
        <strong className="purple">{`${message}`} Boss</strong>
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
        {/* Column for Tags */}
        <Col xs={12} md={6} className="tags-column">
          <h3>Add Tags</h3>
          <Form onSubmit={handleTagSubmit}>
            <Form.Group controlId="tagName">
              <Form.Label>Tag Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tag name"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Add Tag</Button>
          </Form>
        </Col>

        {/* Column for Resume Link */}
        <Col xs={12} md={6} className="resume-column">
          <h3>Add Resume</h3>
          <Form onSubmit={handleResumeSubmit}>
            <Form.Group controlId="resumeLink">
              <Form.Label>Resume Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter resume link"
                ref={resumeRef}
                required
              />
            </Form.Group>
            <Button type="submit">Add Resume</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AdminWrapper;
