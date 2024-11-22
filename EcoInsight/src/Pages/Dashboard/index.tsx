import { Col, Container, Row } from "react-bootstrap";

import Navbar4 from "../../components/navbarDashboard/Navbar4";

import ProfileWidget from "./ProfileWidget";
import ReecentProjects from "./RecentProjects";

import Footer2 from "../../components/footer/Footer2";
import { projects } from "./data";

const Dashboard = () => {
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
            <ProfileWidget />
          </Row>

          <ReecentProjects projects={projects} />
        </Container>
      </section>

      <Footer2 />
    </>
  );
};

export default Dashboard;
