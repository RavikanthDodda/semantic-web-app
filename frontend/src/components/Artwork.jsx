import React from "react";
import { Card } from "react-bootstrap";

function Artwork(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>

        <Card.Link href="#">View Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Artwork;
