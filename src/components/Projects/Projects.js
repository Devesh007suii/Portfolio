import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SELF-DISCIPLINE "
              description="•	Developed a MERN stack project with OTP authentication and user-friendly features such as task management, user authentication, and profile customization."
              ghLink="https://github.com/Devesh007suii/todoo"
              demoLink="https://expo.dev/@devesh007/my-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MEALFULL"
              description="•	Developed Mealfull, a React project with live demo on Netlify that analyzes customers' scheduling patterns using JSON data, featuring a calendar selector, graph display, and booking viewer."
              ghLink="https://github.com/Devesh007suii/Meal_full"
              demoLink="https://master--steady-ganache-79e26a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MYRECIPE"
              description="•	Created a stylish, responsive recipe search page using Edamam API, React, Scss styling, and custom media queries. Live demo available on Netlify"
              ghLink="https://github.com/Devesh007suii/Myrecipe"
              demoLink="https://master--fluffy-elf-d639b8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PDF Automation"
              description="Developed a PDF automation tool using ReactJS for a client. The tool allows users to input various data and generates a customized PDF document based on the inputs. It simplifies the process of creating PDFs with dynamic content, improving efficiency and reducing manual effort."
              ghLink="https://github.com/Devesh007suii/PDF-Automation"
              demoLink="https://coruscating-rabanadas-3e1fb1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Audit Automation"
              description="Developed an automated audit sheet for a client that streamlines the auditing process. The system reads data from an xlsx file with multiple sheets and automatically populates the necessary inputs based on the provided data. This eliminates the need for manual data entry and reduces the chances of errors, improving accuracy and efficiency in auditing tasks."
              ghLink="https://github.com/Devesh007suii/Audit-Automation"
              demoLink="https://fantastic-choux-a84163.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
