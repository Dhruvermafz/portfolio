import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import logo from "../Assets/logo.png";
import { Link, Navigate } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { UserContext } from "../UserContext";
import { API_BASE_URL } from "../config";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/auth/:userId`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((userDetails) => {
              setUserInfo(userDetails);
            })
            .catch((err) =>
              console.log("Header UseEffect userDetailsJSON Error" + err)
            );
        } else {
          console.log("token Expired");
        }
      })
      .catch((err) => console.log("JWT Verify Header", err));
  }, [setUserInfo]);

  function logout() {
    fetch(`${API_BASE_URL}/api/auth/signout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    return <Navigate to="/" />;
  }

  const username = userInfo?.username;
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} alt="brand" className="img-fluid logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Dhruvermafz/portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item>
              {userInfo && (
                <>
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  {userInfo.isAdmin && (
                    <Nav.Link as={Link} to={"/admin"}>
                      Admin Panel
                    </Nav.Link>
                  )}
                  <Nav.Link as={Link} to={"/create"}>
                    Create Post
                  </Nav.Link>
                  <NavDropdown
                    align={"end"}
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item as={Link} to={"/dashboard"}>
                      My Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-secondary small" disabled>
                      Signed in as: {username}
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
