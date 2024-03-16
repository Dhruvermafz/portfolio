import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PopularPost = () => {
  return (
    <Card className="box-sidebar bg-gray-850 border-gray-800">
      <Card.Header className="head-sidebar wow animate__animated animate__fadeIn">
        <Card.Title className="line-bottom">Popular Posts</Card.Title>
      </Card.Header>
      <Card.Body className="content-sidebar">
        <div className="list-posts">
          <Card className="item-post wow animate__animated animate__fadeIn">
            <Card.Img variant="top" src="images/img-post.jpg" alt="Genz" />
            <Card.Body className="info-post border-gray-800">
              <Card.Title className="color-white">
                Creating is a privilege but it’s also a gift
              </Card.Title>
              <Card.Text className="color-gray-700">15 mins read</Card.Text>
              <ListGroup className="d-inline-block">
                <ListGroupItem className="color-gray-700">
                  15 April 2022
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
          {/* Repeat similar structure for other popular posts */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PopularPost;
