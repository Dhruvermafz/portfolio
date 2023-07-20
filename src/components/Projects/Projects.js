import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import editor from "../../Assets/Projects/codeEditor.png";

import tictactoe from "../../Assets/Projects/tictactoe.png";
import todolist from "../../Assets/Projects/todolist.png";
import Particle from "../Particle";
import resumeBuilder from "../../Assets/Projects/resume.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To Do List"
              description="Todo list app project using react hooks Here is the screenshot of the project.Functionalities:
              1. Add Todo by clicking add button
              2. Add Todo by pressing Enter key
              3. Delete Todo"
              ghLink="https://github.com/Dhruvermafz/CodeClause-TodoList"
              demoLink="https://ethereal-hall.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix - Landing Page"
              description="A landing page for Netflix, cloned with ReactJs."
              ghLink="https://github.com/Dhruvermafz/netfilx-clone"
              demoLink="https://combative-beetle.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="The Tic Tac Toe game made with ReactJS offers a visually appealing and user-friendly interface that allows players to immerse themselves in the fun and strategic gameplay. The game board is displayed on the screen, consisting of a 3x3 grid, with each cell representing a spot where the players can make their moves."
              ghLink="https://github.com/Dhruvermafz/tic-tac-toe"
              demoLink="https://serious-basket.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="Resume Builder build using React for Frontend and Express as Middleware.
              Material UI and React-Bootstrap for styling."
              ghLink="https://github.com/Dhruvermafz/CodeAlpha-ResumeBuilder"
              demoLink="https://resumebuilder-v1.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
