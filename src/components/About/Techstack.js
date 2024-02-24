import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from "../Tooltip";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
const techStackData = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <DiMysql />, name: "MySQL" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Tooltip text={tech.name} placement="top">
            {tech.icon}
          </Tooltip>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
