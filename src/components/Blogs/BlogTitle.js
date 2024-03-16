import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const BlogTitle = () => {
  return (
    <Row className="mt-50 align-items-end">
      <Col lg={9} md={8}>
        <h2 className="color-linear mb-30">
          Digital Design That Will Help You Start Your Business123
        </h2>
        <div className="box-author mb-20">
          <Image src="images/author2_1.png" alt="Genz" />
          <div className="author-info">
            <h6 className="color-gray-700">William Randolph</h6>
            <span className="color-gray-700 text-sm mr-30">25 April 2022</span>
            <span className="color-gray-700 text-sm">3 mins to read</span>
          </div>
        </div>
      </Col>
      <Col lg={3} md={4}>
        <div className="box-share border-gray-800">
          <h6 className="d-inline-block color-gray-500 mr-10">Share</h6>
          <a className="icon-media icon-fb" href="#"></a>
          <a className="icon-media icon-tw" href="#"></a>
          <a className="icon-media icon-printest" href="#"></a>
        </div>
      </Col>
    </Row>
  );
};

export default BlogTitle;
