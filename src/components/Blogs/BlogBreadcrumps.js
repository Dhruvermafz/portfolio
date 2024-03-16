import React from "react";
import { Breadcrumb } from "react-bootstrap";
import BlogTags from "./BlogTags";

const BlogBreadcrumbs = () => {
  return (
    <div className="pt-30 border-bottom border-gray-800 pb-20">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/blogs">Blog</Breadcrumb.Item>
        <Breadcrumb.Item active>
          Digital Design That Will Help You Start Your Business
        </Breadcrumb.Item>
      </Breadcrumb>
      <BlogTags />
    </div>
  );
};

export default BlogBreadcrumbs;
