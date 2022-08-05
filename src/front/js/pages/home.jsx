import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar collapseOnSelect expand="d-block" bg="dark" variant="dark">
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
      </Navbar>

      <div className="container w-100%">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1826bb99249%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1826bb99249%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="PRUEBA 1"
            />
            <Carousel.Caption>
              <h3>PRUEBA 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1826bb99249%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1826bb99249%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="PRUEBA 2"
            />

            <Carousel.Caption>
              <h3>PRUEBA 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1826bb99249%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1826bb99249%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="PRUEBA 3"
            />

            <Carousel.Caption>
              <h3>PRUEBA 3</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="card-group">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mi Salud</Card.Title>
            <Card.Text>
              Conoce tu edad biológica y el riesgo precoz de padecer la
              enfermedad de Alzheimer.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Tratamientos</Card.Title>
            <Card.Text>
              Explore los nuevos avances para tratar la enfermedad de Alzheimer
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Coordenadas</Card.Title>
            <Card.Text>
              Conoce la ubicación de tu ser querido usando geolocalización
              geográfica.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mis Alertas</Card.Title>
            <Card.Text>
              Obten las notificaciones oportunas de seguimiento del tratamiento.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card-group">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mi Salud</Card.Title>
            <Card.Text>
              Conoce tu edad biológica y el riesgo precoz de padecer la
              enfermedad de Alzheimer.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Tratamientos</Card.Title>
            <Card.Text>
              Explore los nuevos avances para tratar la enfermedad de Alzheimer
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Coordenadas</Card.Title>
            <Card.Text>
              Conoce la ubicación de tu ser querido usando geolocalización
              geográfica.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mis Alertas</Card.Title>
            <Card.Text>
              Obten las notificaciones oportunas de seguimiento del tratamiento.
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
