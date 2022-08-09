import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import Stack from "react-bootstrap/Stack";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  return (
    <div style={{ backgroundColor: "#dde0ab" }}>
      {/* <Navbar collapseOnSelect expand="d-block" bg="dark" variant="dark">
        <Navbar.Brand href="#home">AcompañaME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contactanos</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="container" style={{ backgroundColor: "#dde0ab" }}>
        <Button
          variant="succes m-3"
          onClick={handleShow}
          style={{ backgroundColor: "#73b1c1", width: "250px" }}
        >
          Menú
        </Button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: "#dde0ab", width: "250px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>AcompáñaME</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="dropdown mt-3">
              <ListGroup defaultActiveKey="#link1">
                <Stack gap={3}>
                  <Button
                    href="./"
                    variant="succes"
                    style={{ backgroundColor: "#73b1c1", padding: "5px" }}
                  >
                    Home
                  </Button>{" "}
                  <Button
                    href="/Register"
                    variant="succes"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    Registrate
                  </Button>{" "}
                  <Button
                    href="/login"
                    variant="succes"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    Login
                  </Button>{" "}
                  <Button
                    href="/login"
                    variant="succes"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    Preguntas
                  </Button>{" "}
                  <Button
                    href="/login"
                    variant="succes"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    Contáctanos
                  </Button>{" "}
                </Stack>
              </ListGroup>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="container w-75%">
          <div className="container w-75%">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="PRUEBA 1"
                  style={{ borderRadius: "20px" }}
                />
                <Carousel.Caption>
                  <h3>Aquí estamos para ti</h3>
                  <p>
                    "Queremos acompañarte en tu proceso de salud con
                    alternativas que mejoren tu calidad de vida"
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1610019354509-d7501ad50598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80"
                  alt="PRUEBA 2"
                  style={{ borderRadius: "20px" }}
                />

                <Carousel.Caption>
                  <h3>Desarrolla Conciencia de Salud</h3>
                  <p>
                    "Sabemos que podemos darte herramientas para mejorar tu
                    calidad de vida"
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="PRUEBA 3"
                  style={{ borderRadius: "20px" }}
                />

                <Carousel.Caption>
                  <h3>Establece un Estilo de Vida Saludable</h3>
                  <p>
                    ¿Sabías que la enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genético y más de 70% de aspectos
                    epigéneticos?
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://t3.ftcdn.net/jpg/04/66/01/44/240_F_466014400_OfneDsUiC62HhWpgPjCYEaUFcwlpFhJ5.jpg"
                  alt="PRUEBA 4"
                  style={{ borderRadius: "20px" }}
                />

                <Carousel.Caption>
                  <h3>Estilo de Vida Saludable</h3>
                  <p>
                    ¿Sabías que la enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genético y más de 70% de aspectos
                    epigéneticos?
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1572567981653-ce74f7356946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt="PRUEBA 3"
                  style={{ borderRadius: "20px" }}
                />

                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>
                    Los cuidadores deben cuidarse y evitar el síndrome de fatiga
                    crónica
                  </h3>
                  <p style={{ color: "black" }}>
                    ¿Sabías que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genético y más de 70% de aspectos
                    epigéneticos?
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="PRUEBA 5"
                  style={{ borderRadius: "20px" }}
                />

                <Carousel.Caption>
                  <h3>
                    ¿Conoces los nuevos biomarcadores para predecir y
                    diagnosticar la enfermedad de Alzheimer?
                  </h3>
                  <p>
                    ¿Sabías que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genético y más de 70% de aspectos
                    epigéneticos?
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Container>
        <div className="row row-cols-4">
          <div className="col " style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                alignItems: "center",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://as1.ftcdn.net/v2/jpg/02/38/75/38/1000_F_238753884_IjzDHPyDjICoKQtEKUGcVIJaYz9XtFl2.jpg"
                style={{ borderRadius: "20px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Mi Salud</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Conoce tu edad biológica y el riesgo precoz de padecer la
                  enfermedad de Alzheimer.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons.flaticon.com/png/512/5272/premium/5272677.png?token=exp=1659995454~hmac=0db4415b127fcee7c9e23be1dc2f04db"
                style={{ borderRadius: "20px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Tratamientos</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Explore los nuevos avances para tratar la enfermedad de
                  Alzheimer.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/2282/2282435.png"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Mi Ubicación</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Conoce la ubicación de tu ser querido usando geolocalización
                  geográfica.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Link
                    type="button"
                    className="btn btn-light btn-sm"
                    variant="light"
                    size="lg"
                    to={`/ubicacion`}
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/05/06/43/25/240_F_506432564_3FxWUxvRxlI9y0hGyUxqp50lWTUZe9VA.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Mis Alertas</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Obtén las notificaciones oportunas de seguimiento del
                  tratamiento.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row row-cols-4">
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/1354/1354163.png"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Utilidades</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Aprenda acerca de las causas, los síntomas y fases del
                  Alzheimer así como los avances que se han obtenido.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Link
                    variant="light"
                    size="lg"
                    className="btn btn-light"
                    to={"/informacion/utilidades"}
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card
              style={{
                width: "17rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/2855/2855558.png"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Soy Cuidador</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Conozca como auto gestionarse para afrontar el rol de cuidador
                  y cuidar su salud integral.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card
              style={{
                width: "18rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/4406/4406386.png"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Mi Coach</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Interactúa con un Health Coach y recibe un acompañamiento
                  online en tu proceso de salud geográfica.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card
              style={{
                width: "18rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png"
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Relaciones</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Revisa tus las notificaciones a tiempo para un correcto
                  seguimiento del tratamiento del paciente.
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#73b1c1" }}
                  >
                    <h3>Accede</h3>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};
