import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsFilePost } from "react-icons/bs";
function BlogCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.postImg} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.postDesc}</Card.Text>
        <Button variant="primary" href={props.postLink} target="_blank">
          <BsFilePost /> &nbsp;
          {props.isPost ? "Read It" : "Server Error"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default BlogCards;
