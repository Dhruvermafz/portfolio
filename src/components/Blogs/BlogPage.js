import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Spinner } from "react-bootstrap";
import BlogCard from "./BlogCard";

import Particle from "../Particle";
import blogs from "./blogs.json";
const BlogPage = () => {
  // const dispatch = useDispatch();
  // const blogs = useSelector((state) => state.blogs.blogs);
  const loading = useSelector((state) => state.blogs.loading);

  // useEffect(() => {
  //   dispatch(fetchBlogs());
  // }, [dispatch]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs</strong>
        </h1>

        {/* Major Projects */}
        {/* <h1 className="project-heading">
          Here are some of my recent blogs on{" "}
          <a
            href="https://itsablog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="purple"
          >
            <strong>ItsABlog</strong>
          </a>
        </h1> */}

        <Row>
          {loading ? (
            <Spinner animation="border" role="status" className="mx-auto">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                postImg={blog.imageUrl}
                title={blog.title}
                postDesc={blog.description}
                postLink={`/blogs/${blog._id}`}
                isPost={true}
              />
            ))
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default BlogPage;
