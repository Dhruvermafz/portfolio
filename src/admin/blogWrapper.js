import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "../styles/button.css";
import { Link } from "react-router-dom";
import MetaData from "../components/MetaData";
import { Tags } from "../components/Tags";
import SidebarActions from "./add-new-post/SidebarActions";

const BlogWrapper = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="portfolio-wrapper">
      <MetaData title="Blogs" />
      <Container className="mt-5">
        <Row>
          <Col sm={4} className="portfolio-search">
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <AiOutlineSearch />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
              </InputGroup>
            </Form>
          </Col>

          <Col sm={4}>
            <h1 className="admin-header">
              <strong className="purple">Blogs</strong>
            </h1>
          </Col>

          <Col sm={4} className="addPortfolio">
            {/* Button to toggle the modal */}
            <Link to="/admin/blogs/add-edit">
              <Button variant="primary">Add Blog</Button>
            </Link>
          </Col>
          <Col sm={4} className="tags-blog">
            <Tags
              items={["react", "typescript", "заметки"]}
              isLoading={false}
            />
          </Col>
          <Col>
            <SidebarActions />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogWrapper;
