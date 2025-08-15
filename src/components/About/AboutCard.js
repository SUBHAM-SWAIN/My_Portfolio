import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Subham Swain</span> from{" "}
            <span className="purple">Bhubaneswar, India</span>.
            <br />
            I am currently pursuing a B.Tech in Computer Science and Engineering
            at GEC.
            <br />
            I have a strong passion for <span className="purple">programming</span> 
            and <span className="purple">web development</span>, constantly exploring new technologies.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Algorithm Practice
            </li>
            <li className="about-activity">
              <ImPointRight />Watching tech talks / tutorials
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build meaningful projects that make a real impact."
          </p>
          <footer className="blockquote-footer">Subham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
