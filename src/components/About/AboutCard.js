import React from "react";
import Card from "react-bootstrap/Card";
import { ImBooks } from "react-icons/im";
import { SiCinema4D } from "react-icons/si";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple"> Dhruv Verma</span> from{" "}
            <span className="purple">Haryana, India</span>
            <br /> I am a final year student pursuing BTech in Computer Science
            at{" "}
            <span className="purple">
              The Technological Institute of Textile & Sciences, Bhiwani
            </span>
            <br />I am passionate about{" "}
            <span className="purple">Software Development</span> and{" "}
            <span className="purple">Designing the UI/UX.</span>
          </p>

          <div
            style={{
              borderLeft: "4px solid rgb(155, 126, 172)",
              paddingLeft: "10px",
              backgroundColor: "rgb(238, 238, 238)",
            }}
          >
            <p
              className="purple"
              style={{
                // color: "rgb(155, 126, 172)",
                color: "inherit",
                fontStyle: "italic",
                margin: "16px",
              }}
            >
              "Never forget what you are, for the rest of the world will not;
              Wear it like armor, and it can never be used to hurt you."
            </p>
            <footer className="blockquote-footer">
              - Tyrion Lannister [A GAME OF THRONES]"
            </footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
