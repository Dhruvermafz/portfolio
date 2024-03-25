import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Spinner, Button, Form } from "react-bootstrap";

import Particle from "../Particle";
import blogs from "./blogs.json";
import MetaData from "../MetaData";
import { Tags } from "../Tags";
import BlogHeader from "./BlogHeader";
import blogService from "../../api/blogs/blogService";

const BlogPage = () => {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }
    fetchPosts();
  }, [location.search]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await blogService.getBlogs();
      setPosts(data.posts);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData({ ...sidebarData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = new URLSearchParams(sidebarData).toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    setLoading(true);
    try {
      const numberOfPosts = posts.length;
      const startIndex = numberOfPosts;
      const data = await blogService.getBlogs(startIndex);
      setPosts([...posts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="row">
        <MetaData title="Blogs" />
        <div align="center" style={{ margin: "auto", width: "90%" }}>
          <h1 className="page-heading">
            <strong className="purple">All Posts</strong>
          </h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="searchTerm">
            <Form.Control
              type="text"
              placeholder="Search Term"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <hr /> {/* Add a horizontal line */}
      </div>

      <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
        <div className="flex flex-wrap">
          {posts &&
            posts.map((post) => (
              <BlogHeader
                key={post.Id}
                data={post}
                content={post.content}
                readTime={post.readTime.text}
              />
            ))}
        </div>
      </div>
      {showMore && (
        <div className="row">
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </Container>
  );
};

export default BlogPage;
