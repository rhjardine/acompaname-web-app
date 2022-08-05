import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import Button from "react-bootstrap/Button";
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
              src="https://dcq42kgjc5wgh.cloudfront.net/cdn/13/images/alteraciones-psiquicas-en-personas-mayores_l_primaria_1_1565334797.jpg"
              alt="PRUEBA 1"
            />
            <Carousel.Caption>
              <h3>Aqui estamos para ti</h3>
              <p>
                "Queremos acompañarte en tu proceso de salud con alternativas
                que mejoren tu calidad de vida"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/grandson-holding-grandmother-hands-close-up-view-picture-id1218453905?k=20&m=1218453905&s=612x612&w=0&h=UOiRlPHIeskTpfjvB6jlLpSG_hmCxLWuSlfkfZikgt0="
              alt="PRUEBA 2"
            />

            <Carousel.Caption>
              <h3>Conciencia de Salud</h3>
              <p>
                "Sabemos que podemos darte herramientas para mejorar tu calidad
                de vida"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/elderly-care-old-and-young-picture-id897821744?k=20&m=897821744&s=612x612&w=0&h=uAQ1MP0a3jpFchqddJmQgc9_8jiv3d0TpcTIaI-GT3s="
              alt="PRUEBA 3"
            />

            <Carousel.Caption>
              <h3>Estilo de Vida Saludable</h3>
              <p>
                Sabias que las enfermedad de Alzheimer viene condicionada por un
                20% de componente genetico y mas de 70% de aspectos
                epigéneticos"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="card-group">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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holder.js/100px180"
          />

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
