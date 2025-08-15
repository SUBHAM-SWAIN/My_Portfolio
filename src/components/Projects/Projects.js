import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import insta from "../../Assets/Projects/insta.png";
import chat_plus from "../../Assets/Projects/chat-plus.png";
import sifra2 from "../../Assets/Projects/sifra2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_plus}
              isBlog={false}
              title="Chat-Plus"
              description="Real-time chat application with authentication, messaging, and responsive design, enabling seamless communication between users."
              ghLink="https://github.com/SUBHAM-SWAIN/CHAT-APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sifra2}
              isBlog={false}
              title="Sifra 2.0"
              description="React-based virtual assistant using APIs to provide intelligent responses, automation, and interactive user experience."
              ghLink="https://github.com/SUBHAM-SWAIN/sifra2"
              demoLink="https://subha-sifra2o.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Insta Clone"
              description="Full-stack Instagram clone with posts, likes, comments, user profiles, and interactive social media features."
              ghLink="https://github.com/SUBHAM-SWAIN/INSTA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
