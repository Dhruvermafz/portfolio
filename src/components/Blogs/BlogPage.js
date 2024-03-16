import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Spinner, Button, Form } from "react-bootstrap";
import PostCard from "./PostCard";
import ListLayout from "./ListLayout";
import Particle from "../Particle";
import blogs from "./blogs.json";
import MetaData from "../MetaData";
import { Tags } from "../Tags";

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
    const searchQuery = new URLSearchParams(sidebarData).toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      setLoading(false);
      return;
    }
    const data = await res.json();
    setPosts(data.posts);
    setLoading(false);
    setShowMore(data.posts.length === 9);
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
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    setPosts([...posts, ...data.posts]);
    setShowMore(data.posts.length === 9);
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
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
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
