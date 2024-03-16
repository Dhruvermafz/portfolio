import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { Card } from "react-bootstrap";
import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  return (
    <Card key={id} className="achievement-card">
      <Card.Body>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
          </div>
          <div className="achievecard-details2">
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <div className="achievecard-field">
              <AiOutlineFolder />
              <Card.Text>{field}</Card.Text>
            </div>
          </div>
        </div>
        <div className="achievecard-imgcontainer">
          <Card.Img variant="top" src={image} alt="" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
