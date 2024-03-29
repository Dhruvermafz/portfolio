import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import itsablog from "../../Assets/Projects/itsablog.png";
import liveAuctions from "../../Assets/Projects/live-auctions.jpg";
import instadownloader from "../../Assets/Projects/instadownloader.png";
import todolist from "../../Assets/Projects/todolist.png";
import editor from "../../Assets/Projects/codeEditor.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import two from "../../Assets/Projects/2048.png";
import MetaData from "../MetaData";
function Projects() {
  // Major Projects
  const majorProjects = [
    {
      imgPath: itsablog,
      title: "ItsABlog",
      description:
        "ItsABlog is a multi-user blogging website for readers who have a say but no one to listen.",
      ghLink: "https://github.com/Dhruvermafz/social-app",
      demoLink: "https://itsablog.vercel.app",
    },
    {
      imgPath: liveAuctions,
      title: "Live Auctions",
      description:
        "Live Auctions is a website where products can be purchased and sold via live auctions.",
      ghLink: "https://github.com/Dhruvermafz/auctions-client",
      demoLink: "https://live-auctions.vercel.app/",
    },
    {
      imgPath: instadownloader,
      title: "Insta Downloader",
      description:
        "Insta Downloader is a website built using Next.js and TypeScript, allowing users to download Insta Reels without any login.",
      ghLink: "https://github.com/Dhruvermafz/insta-downloader",
      demoLink: "https://insta-videodownloader.vercel.app/",
    },
    {
      imgPath: two,
      title: "2048",
      description:
        "2048 is a fun game for sliding tiles and merging numbers on a 4x4 grid. Using the arrow keys or the W, A, S, D keys alternatively. Every time you press a key, tiles slide in the specified direction. Keep an eye out for tiles with the same value, as they will merge into a new tile. Reaching the goal 2048 tile!",
      ghLink:
        "https://github.com/Dhruvermafz/interview-preparation/tree/main/game",
      demoLink: "https://twoofoureightgame.vercel.app/",
    },
  ];

  // Minor Projects
  const minorProjects = [
    {
      imgPath: todolist,
      title: "To Do List",
      description: "Todo list app project using react hooks.",
      ghLink: "https://github.com/Dhruvermafz/CodeClause-TodoList",
      demoLink: "https://ethereal-hall.surge.sh/",
    },
    {
      imgPath: editor,
      title: "Netflix - Landing Page",
      description: "A landing page for Netflix, cloned with ReactJS.",
      ghLink: "https://github.com/Dhruvermafz/netfilx-clone",
      demoLink: "https://combative-beetle.surge.sh/",
    },
    {
      imgPath: tictactoe,
      title: "Tic Tac Toe",
      description:
        "The Tic Tac Toe game made with ReactJS offers a visually appealing and user-friendly interface.",
      ghLink: "https://github.com/Dhruvermafz/tic-tac-toe",
      demoLink: "https://serious-basket.surge.sh/",
    },
  ];

  return (
    <>
      <MetaData title={"Projects"} />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>

          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          {/* Major Projects */}
          <h1 className="project-heading">
            Here are some <strong className="purple">Major Projects</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {majorProjects.map((project, index) => (
              <Col key={index} md={4} className="project-card">
                <ProjectCard {...project} isBlog={false} />
              </Col>
            ))}
          </Row>

          {/* Minor Projects */}
          <h1 className="project-heading">
            Here are some <strong className="purple">Minor Projects.</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {minorProjects.map((project, index) => (
              <Col key={index} md={4} className="project-card">
                <ProjectCard {...project} isBlog={false} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
