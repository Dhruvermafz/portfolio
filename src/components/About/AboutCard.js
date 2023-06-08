import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Verma</span>from{" "}
            <span className="purple">Haryana, India</span>
            <br /> I am a final uear student pursuiing an BTech in Computer
            Science at{" "}
            <span className="purple">
              Technological Institute of Textile & Sciences, Bhiwani
            </span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies/Anime
            </li>
            <li className="about-activity">
              <ImPointRight />
              Reading Books
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Never forgot what you are, cause the rest of the world will not;
            Use it as your armor, and it will never hurt you. -Tyrion Lannister
            [A GAME OF THRONES]"
          </p>

          <footer className="blockquote-footer">Dhruv Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
