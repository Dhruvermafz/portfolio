import React, { useState, useEffect } from "react";
import BlogCards from "./BlogCard";
import { getPosts, POST_TYPES } from "../../services/posts";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const query = ""; // Add any query parameters if needed
      const data = await getPosts(token, query);
      if (data.type === POST_TYPES.GET_POSTS) {
        setPosts(data.posts);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {posts.map((post) => (
        <BlogCards
          key={post._id}
          postImg={post.imageUrl} // Replace with the actual field from your API
          title={post.title}
          postDesc={post.description}
          postLink={`/post/${post._id}`} // Adjust the link based on your routing
          isPost={true}
        />
      ))}
    </div>
  );
};

export default BlogPage;
