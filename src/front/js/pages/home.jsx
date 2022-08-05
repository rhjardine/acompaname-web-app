import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import Imagen from "./Image";

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
              src="https://cdn.pixabay.com/photo/2017/08/13/14/55/grandma-2637457__340.jpg"
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
              src="https://media.istockphoto.com/photos/dementia-and-occupational-therapy-home-caregiver-and-senior-adult-picture-id820952986?b=1&k=20&m=820952986&s=170667a&w=0&h=W682Rbm5ySYlt_dVjQAo1EkXHepB-qCE89brITQGT-I="
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
              src="https://media.istockphoto.com/photos/woman-spending-time-with-her-elderly-mother-picture-id1248779487?b=1&k=20&m=1248779487&s=170667a&w=0&h=hJBxdYMT_fipwtUU_Bd1njxc2c31-IOpiQxCkLnDkqI="
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
            <Card.Title>Mi Ubicación</Card.Title>
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
            <Card.Title>Utilidades</Card.Title>
            <Card.Text>
              Aprenda acerca de las causas, los síntomas, fases del mal de
              Alzheimer asi como los avances que se han obtenido recientemente
            </Card.Text>
            <Button variant="primary">Accede</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Soy Cuidador</Card.Title>
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
            <Card.Title></Card.Title>
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
