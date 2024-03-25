import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaPortrait, FaCertificate } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <div className={`sidebar ${active ? "active" : ""}`}>
      <div className="logo_content">
        <div className="logo">
          <div
            className="logoname"
            style={{
              marginLeft: "5px",
              fontSize: "1.5rem",
              marginTop: ".5rem",
            }}
          >
            <b>BLOGWEET</b>
          </div>
        </div>
        <i
          className="bx bxl-twitter"
          id="btn"
          style={{ fontSize: "25px" }}
          onClick={toggleSidebar}
        />
      </div>
      <ul className="nav_list">
        <li onClick={toggleSidebar}>
          <Link to="/admin/certificates">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-landmark">Certificates</Tooltip>}
            >
              <FaCertificate />
            </OverlayTrigger>
          </Link>
        </li>
        <li onClick={toggleSidebar}>
          <Link to="/admin/blogs">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-blog">Blogs</Tooltip>}
            >
              <FaBlog />
            </OverlayTrigger>
          </Link>
        </li>
        <li onClick={toggleSidebar}>
          <Link to="/admin/projects">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-projects">Projects</Tooltip>}
            >
              <FaPortrait />
            </OverlayTrigger>
          </Link>
        </li>
        <li onClick={toggleSidebar}>
          <Link to="/admin/team-access">
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id="tooltip-team-access">Team Access</Tooltip>}
            >
              <AiOutlineTeam />
            </OverlayTrigger>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
