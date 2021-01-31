import { Card, Col, Row } from "react-bootstrap";
import CardLinks from "./CardLinks";

const TopCards = () => {
  return (
    <Row>
      <Col
        xs={12}
        md={6}
        className="background-image-card"
        style={{ backgroundImage: "url(assets/hero-umbrella.jpg)" }}
      >
        <Col xs={8} md={6}>
          <Card
            style={{
              top: "10px",
              right: "30px",
              border: "none",
              borderRadius: "1rem",
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src="assets/financesIcon.svg"
                style={{ width: "30px", margin: "5px" }}
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
                  src="assets/shopping.png"
                  style={{ width: "30px", height: "35px", margin: "5px" }}
                />{" "}
                <span
                  style={{
                    color: "#00dbeb",
                    fontWeight: "bolder",
                  }}
                >
                  Shopping
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
    </Row>
  );
};

export default TopCards;
