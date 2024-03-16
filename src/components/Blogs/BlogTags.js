import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const BlogTags = () => {
  return (
    <ButtonGroup className="box-tags">
      <Button
        variant="tags"
        className="bg-gray-850 border-gray-800 mr-10 hover-up"
        href="blog-archive.html"
      >
        #Nature
      </Button>
      <Button
        variant="tags"
        className="bg-gray-850 border-gray-800 mr-10 hover-up"
        href="blog-archive.html"
      >
        #Beauty
      </Button>
      <Button
        variant="tags"
        className="bg-gray-850 border-gray-800 mr-10 hover-up"
        href="blog-archive.html"
      >
        #Travel Tips
      </Button>
      <Button
        variant="tags"
        className="bg-gray-850 border-gray-800 hover-up"
        href="blog-archive.html"
      >
        #House
      </Button>
    </ButtonGroup>
  );
};

export default BlogTags;
