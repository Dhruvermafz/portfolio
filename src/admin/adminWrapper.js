import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBlog, FaPortrait, FaLandmark } from "react-icons/fa";
import { SiTeamviewer } from "react-icons/si";
import { BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";
import Particle from "../components/Particle";
import "../styles/admin.css";
const AdminWrapper = () => {
  return (
    <body className="admin-wrapper">
      <Particle />
      <h1 className="admin-header">
        <strong className="purple">Admin</strong> Portal
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <Link to="/admin/certificates">
            <FaLandmark />
          </Link>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Link to="/admin/blogs">
            <FaBlog />
          </Link>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <Link to="/admin/projects">
            <FaPortrait />
          </Link>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <Link to="/admin/team-access">
            <SiTeamviewer />
          </Link>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Link to="/admin/mails">
            <BsMailbox />
          </Link>
        </Col>
      </Row>
    </body>
  );
};

export default AdminWrapper;
