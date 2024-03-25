import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "../Experience/Experience";
import MetaData from "../MetaData";
import { ImBooks } from "react-icons/im";
import { SiCinema4D } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
function About() {
  return (
    <Container fluid className="about-section" style={{ marginTop: "-2%" }}>
      <MetaData title="About" />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "14px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              <strong className="purple"> About this site</strong>
            </h1>

            <blockquote
              className="blockquote mb-0"
              style={{ textAlign: "justify" }}
            >
              <p>
                Welcome to my home on the internet. This site functions as a
                blog/portfolio, a place where I share my intrusive thoughts and
                opinions apart from tech. I love to read, write and enhance my
                knowledge about things like
                <ul>
                  <li className="about-activity">
                    <ImBooks /> Literature
                  </li>
                  <li className="about-activity">
                    <SiCinema4D /> Entertainment (Music, Cinema, Art)
                  </li>
                  <li className="about-activity">
                    <ImNewspaper />
                    GeoPolitics
                  </li>
                </ul>{" "}
                I will be sharing my takes on several thoughts happening around
                the globe. I'm a keen reader of anything which is often
                distorted.
              </p>
            </blockquote>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
