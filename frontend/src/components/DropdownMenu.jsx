import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function DropdownMenu(props) {
  const [room, setRoom] = useState("");
  const [floor, setFloor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(room);
    props.getArtworks(room);
  };
  const updateRoom = (event) => {
    setRoom(event.target.value);
  };
  const updateFloor = (event) => {
    setFloor(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="form.FloorSelect">
        <Form.Label>Select Floor</Form.Label>
        <Form.Control as="select" onChangeCapture={updateFloor}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="form.RoomSelect">
        <Form.Label>Select Room</Form.Label>
        <Form.Control as="select" onChangeCapture={updateRoom}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DropdownMenu;
