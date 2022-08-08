import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Accede</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
