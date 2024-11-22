import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Project } from "./types";

import Footer2 from "../../components/footer/Footer2";
import Navbar4 from "../../components/navbarDashboard/Navbar4";
import ProfileWidget from "./ProfileWidget";
import RecentProjects from "./RecentProjects";

// Dados iniciais dos projetos
import { projects as initialProjects } from "./data";

const Dashboard = () => {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject: Project) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  return (
    <>
      <Navbar4 fixedWidth />

      <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-title">
                <h3 className="mb-0">Olá empresa</h3>
                <p className="mt-1 fw-medium">Bem vindo a EcoInsight!</p>
              </div>
            </Col>
          </Row>
          <Row>
            <ProfileWidget onAddProject={addProject} />
          </Row>
          <RecentProjects projects={projects} />
        </Container>
      </section>

      <Footer2 />
    </>
  );
};

export default Dashboard;
