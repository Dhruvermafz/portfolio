import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Education from "../Education/Education";
import MetaData from "../MetaData";
import Footer from "../Footer";
function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <MetaData title="Home" />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I want to keep it simple here! I studied Computer Science, got
              intrigued by development side of it. Most of my work involves
              making inhouse softwares with JavaScript. I don't wanna limit
              myself to just one framework.
              <br />
              <br />I worked with different programming languages also:
              <i>
                <b className="purple"> C++, Javascript & Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and C#.
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <p>
                I'm seeking Front-end/FullStack development roles as of now{" "}
                <mark>{`${new Date().getFullYear()}`}</mark>, but not limited to
                just Frontend.{" "}
                <mark className="btn-block" variant="outline-primary">
                  <a
                    href="mailto:vermadhruv09112002@gmail.com"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Available for Full-Time positions
                  </a>
                </mark>
              </p>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Education />
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dhruvermafz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/thenerdy_guy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruvermafz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhruvermafz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Footer />
      </Container>
    </Container>
  );
}

export default Home;
