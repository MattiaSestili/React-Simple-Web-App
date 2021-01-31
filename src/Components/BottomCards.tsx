import { Card, Col, Row } from "react-bootstrap";
import CardLinks from "./CardLinks";

const BottomCards = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={12} md={6}>
            <Card
              style={{
                top: "20px",
                border: "none",
                borderRadius: "1rem",
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="assets/travel.png"
                  style={{ margin: "9px", width: "35px", height: "25px" }}
                />{" "}
                <span>Money Insight</span>
                <Card.Title>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <CardLinks />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card
              style={{
                top: "20px",
                border: "none",
                borderRadius: "1rem",
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="assets/financesIcon.svg"
                  style={{ width: "30px", height: "35px", margin: "5px" }}
                />{" "}
                <span
                  style={{
                    color: "#1a8410",
                    fontWeight: "bolder",
                  }}
                >
                  Finances
                </span>
                <Card.Title>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
                <CardLinks />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col
        xs={12}
        md={6}
        style={{
          backgroundImage: "url(assets/hero-rain.jpg)",
          backgroundSize: "135% auto",
          backgroundPosition: "45%",
          height: "100%",
        }}
      >
        <Col md={{ offset: 6, span: 6 }} xs={{ offset: 4, span: 8 }}>
          <Card
            style={{
              float: "right",
              top: "10px",
              left: "20px",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src="assets/Entertainment.png"
                style={{ width: "30px", margin: "5px" }}
              />{" "}
              <span
                style={{
                  color: "#736d8d",
                  fontWeight: "bolder",
                }}
              >
                Entertainment
              </span>
              <Card.Title>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <CardLinks />
            </Card.Body>
          </Card>
        </Col>
      </Col>
    </Row>
  );
};

export default BottomCards;
