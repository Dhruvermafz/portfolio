import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Partcile from "../Particle";
import Home from "./Home";
import Type from "./Type";

function HomeBase() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Partcile />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Dhruv Verma</strong>
              </h1>

              <div style={{ paddingBottom: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home />
    </section>
  );
}

export default HomeBase;
