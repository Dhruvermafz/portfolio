import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { SideBlock } from "./common/SideBlock";
import "../styles/tags.css";
export const Tags = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Тэги">
      <ListGroup>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <Link
            key={i}
            style={{ textDecoration: "none", color: "black" }}
            to={`/tags/${name}`}
          >
            <ListGroup.Item action>
              {/* Icon */}
              <span style={{ marginRight: "8px" }}>#</span>
              {/* Name */}
              {isLoading ? (
                <div style={{ width: 100 }}>Loading...</div>
              ) : (
                <div>{name}</div>
              )}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </SideBlock>
  );
};
