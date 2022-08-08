import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  return (
    <>
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
      <Button variant="success m-5" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>AcompañaME</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="dropdown mt-3">
            <ListGroup defaultActiveKey="#link1">
              <Button href="./" variant="success">
                Home
              </Button>{" "}
              <Button href="/Register" variant="success">
                Registrate
              </Button>{" "}
              <Button href="/login" variant="success">
                Login
              </Button>{" "}
              <Button href="/login" variant="success">
                Preguntas
              </Button>{" "}
              <Button href="/login" variant="success">
                Contactanos
              </Button>{" "}
            </ListGroup>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="container w-75%">
        <div className="container w-75%">
          <div className="container w-75%">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1567067974934-75a3e4534c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="PRUEBA 1"
                />
                <Carousel.Caption>
                  <h3>Aqui estamos para ti</h3>
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
                />

                <Carousel.Caption>
                  <h3>Conciencia de Salud</h3>
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
                />

                <Carousel.Caption>
                  <h3>Estilo de Vida Saludable</h3>
                  <p>
                    Sabias que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genetico y mas de 70% de aspectos
                    epigéneticos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1459267809427-0b40207b2cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="PRUEBA 3"
                />

                <Carousel.Caption>
                  <h3>Estilo de Vida Saludable</h3>
                  <p>
                    Sabias que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genetico y mas de 70% de aspectos
                    epigéneticos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1572567981653-ce74f7356946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt="PRUEBA 3"
                />

                <Carousel.Caption>
                  <h3>Estilo de Vida Saludable</h3>
                  <p>
                    Sabias que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genetico y mas de 70% de aspectos
                    epigéneticos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="PRUEBA 3"
                />

                <Carousel.Caption>
                  <h3>Estilo de Vida Saludable</h3>
                  <p>
                    Sabias que las enfermedad de Alzheimer viene condicionada
                    por un 20% de componente genetico y mas de 70% de aspectos
                    epigéneticos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Container>
        <Row xs={1} md={5} className="g-4" justify-content-md-center>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
              alignItems: "center",
            }}
            className="bg-success"
          >
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/3208/3208700.png"
            />
            <Card.Body>
              <Card.Title>
                <h2 style={{ textAlign: "center" }}>Mi salud</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Conoce tu edad biológica y el riesgo precoz de padecer la
                enfermedad de Alzheimer.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
          >
            <Card.Img
              variant="top"
              src="https://cdn-icons.flaticon.com/png/512/647/premium/647186.png?token=exp=1659831039~hmac=f0783d14d41a2ce99686d35e1f12bea0"
            />
            <Card.Body>
              <Card.Title>
                <h2 style={{ textAlign: "center" }}>Tratamientos</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Explore los nuevos avances para tratar la enfermedad de
                Alzheimer
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
          >
            <Card.Img
              variant="top"
              src="https://cdn-icons.flaticon.com/png/512/4904/premium/4904251.png?token=exp=1659831706~hmac=c01ead3093e892525ee639ea2f7e28b8"
            />
            <Card.Body>
              <Card.Title>
                <h2 style={{ textAlign: "center" }}>Coordenadas</h2>
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
                >
                  {"Accede"}
                </Link>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
          >
            <Card.Img
              variant="top"
              src="https://cdn-icons.flaticon.com/png/512/5623/premium/5623014.png?token=exp=1659831765~hmac=9ddf6ce7bc38bb932f3e27d09266adec"
            />
            <Card.Body>
              <Card.Title>
                <h2 style={{ textAlign: "center" }}>Mis Alertas</h2>
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Obten las notificaciones oportunas de seguimiento del
                tratamiento.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Container>
        <Row xs={1} md={5} className="g-4">
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
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
                Aprenda acerca de las causas, los síntomas y fases del Alzheimer
                asi como los avances que se han obtenido.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
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
                Conozca como auto gestionarse para afrontar el rol de cuidador y
                cuidar su salud integral.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
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
                Interactua con un Health Coach y recibe un acompañamiento online
                en tu proceso de salud geográfica.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              padding: "20px",
              margin: "40px 10px 40px 10px",
            }}
            className="bg-success"
          >
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/2666/2666505.png"
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
                <Button variant="light" size="lg">
                  <h3>Accede</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
