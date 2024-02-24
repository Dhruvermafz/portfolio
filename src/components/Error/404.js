import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";
import Error from "../../Assets/404.svg";
import MetaData from "../MetaData";
import "../../styles/error.css";
const Error404 = () => {
  return (
    <main className="main">
      <MetaData title="404" />
      <div className="cover-home3 shadow-page-404">
        <Container>
          <Row>
            <Col xl={10} lg={12} className="ml-auto mr-auto">
              <div className="box-page-404">
                <div className="text-center mb-150 mt-100">
                  <Row className="box-404">
                    <Col lg={6}>
                      <div className="image-404">
                        <img src={Error} alt="Genz" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="info-404 text-start mt-60">
                        <p style={{ color: "white" }}>Don't be spooked !</p>

                        <p style={{ color: "white" }}>
                          The page you’re looking for has slipped into an
                          unknown realm. Click the button below to go back to
                          the homepage.
                        </p>
                        <div className="mt-25">
                          <Link to="/" className="btn btn-linear hover-up">
                            <BsHouseDoor className="me-2" />
                            Homepage
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Error404;
