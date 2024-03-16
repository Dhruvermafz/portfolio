import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import PopularPost from "./PopularPost";

const BlogCategories = () => {
  return (
    <Col lg={4}>
      <div className="sidebar">
        <Card className="box-sidebar bg-gray-850 border-gray-800">
          <Card.Body>
            <Card.Title className="head-sidebar line-bottom">
              Categories
            </Card.Title>
            <ListGroup className="content-sidebar list-cats">
              <ListGroupItem className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                <div className="cat-left">
                  <div className="image-cat">
                    <a href="blog-archive.html">
                      <img src="images/cat1.png" alt="Genz" />
                    </a>
                  </div>
                  <div className="info-cat">
                    <a
                      className="color-gray-500 text-xl"
                      href="blog-archive.html"
                    >
                      Travel Tips
                    </a>
                  </div>
                </div>
                <div className="cat-right">
                  <a
                    className="btn btn-small text-sm color-gray-500 bg-gray-800"
                    href="blog-archive.html"
                  >
                    36 posts
                  </a>
                </div>
              </ListGroupItem>
              {/* Other category items */}
            </ListGroup>
          </Card.Body>
        </Card>
        <PopularPost />
      </div>
    </Col>
  );
};

export default BlogCategories;
