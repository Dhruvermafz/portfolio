// PortfolioWrapper.js
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
import { AiOutlineSearch } from "react-icons/ai";
import MetaData from "../components/MetaData";
import "../styles/button.css";
import { Link } from "react-router-dom";
import { MdSave } from "react-icons/md";
import axios from "axios";
import Particle from "../components/Particle";
import NewPortfolio from "./projects/NewPortfolio";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const PortfolioWrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
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
            <Button variant="primary" onClick={toggleModal}>
              Add Project
            </Button>

            <NewPortfolio showModal={showModal} setShowModal={setShowModal} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioWrapper;
