import { Button, Card, Figure } from "react-bootstrap";

const CardLinks = () => {
  return (
    <>
      {/* <Card.Link href="#" style={{ position: "relative", top: "1.5rem" }}>
        Read more
      </Card.Link> */}
      <Button
        style={{
          marginTop: "1rem",
          backgroundColor: "#644cff",
          color: "white",
          borderRadius: "1.5rem",
        }}
      >
        Read more
      </Button>
      <Card.Link
        href="#"
        style={{
          float: "right",
          lineHeight: 3,
          position: "relative",
          top: "1rem",
        }}
      >
        <Figure style={{ width: 20 }}>
          <Figure.Image src="assets/more.png" />
        </Figure>
      </Card.Link>
      <Card.Link
        href="#"
        style={{
          float: "right",
          position: "relative",
          top: "1.2rem",
        }}
      >
        <Figure style={{ width: 40 }}>
          <Figure.Image src="assets/pin.png" />
        </Figure>
      </Card.Link>
    </>
  );
};

export default CardLinks;
