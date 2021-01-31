import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import BottomCards from "./BottomCards";
import TopCards from "./TopCards";

const AppContainer = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center" style={{ marginBottom: 25 }}>
          <Col xs lg="2" />
          <Col md="auto">
            <h1 className="header-container">Snoops</h1>
            <p className="header-container">
              Here are your latest Snoops. Hope they help
            </p>

            <Navbar>
              <Nav className="mr-auto">
                <Nav.Link
                  href="#latest"
                  className="nav-as-button-link latest-button"
                >
                  Latest
                </Nav.Link>
                <Nav.Link
                  className="nav-as-button-link pin-button"
                  href="#pinned"
                >
                  Pinned
                </Nav.Link>
                <Nav.Link
                  className="nav-as-button-link browse-button"
                  href="#browse"
                >
                  Browse
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col xs lg="2" />
        </Row>
      </Container>

      <Col sm={12}>
        <TopCards />

        <BottomCards />
      </Col>
    </div>
  );
};

export default AppContainer;
