import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pedro from "./Imagenes/Pedro.png";
import Robi from "./Imagenes/Robi.png";
import Peres from "./Imagenes/Peres.png";
import Richard from "./Imagenes/Richard.png";

const Team = () => {
  const [singIn, setSingIn] = useState({ user: "", password: "" });
  const handleChange = (event) => {
    setSingIn({ ...singIn, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ backgroundColor: "#73b1c1" }}>
      <Container style={{ backgroundColor: "#DDE0AB", borderRadius: "20px" }}>
        <div className="row row-cols-4">
          <div className="col " style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                height: "45rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                alignItems: "center",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Pedro}
                style={{ borderRadius: "20px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h3 style={{ textAlign: "center" }}>Pedro Maldonado</h3>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Más de 10 años de experiencia como realizador audiovisual con
                  experiencia en producción de eventos corporativos en vivo.
                  Actualmente complemento mis habilidades tanto en el área de
                  contenido como en el área técnica con un fabuloso Bootcamp
                  como Desarrollador Full Stack en 4Geeks Academy.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                height: "45rem",
                padding: "20px",
                margin: "40px 5px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Robi}
                style={{ borderRadius: "20px", height: "280px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h3 style={{ textAlign: "center" }}>Robianna De La Parra</h3>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  ¡Me gusta contar historias! Por eso escogí Periodismo como
                  profesión y esta me ha permitido trabajar en el mundo digital
                  para agencias de publicidad, televisión, radio, revistas y de
                  manera autónoma, siempre llevando mi escritura creativa. Y,
                  ahora, echando uno que otro código como estudiante en 4Geeks
                  Academy.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                height: "44rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Peres}
                style={{ borderRadius: "20px", height: "280px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Jose Perestrelo</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  <p>
                    Amante desde pequeño por las computadoras mi pasión creció
                    grandemente por la informática, lo cual me llevo a estudiar
                    Ing. en informática en donde conocí el gran mundo de la
                    programación, y gracias a 4Geeks pude llevar el aprendizaje
                    al maximo!!{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col" style={{ padding: "5px" }}>
            <Card
              style={{
                width: "17rem",
                height: "50rem",
                padding: "20px",
                margin: "40px 10px 40px 10px",
                backgroundColor: "#feffdf",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={Richard}
                style={{ borderRadius: "20px", height: "280px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>Richard Jardine</h2>
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  Soy un profesional de la informática y el Coaching, con mas de
                  10 años de experiencia en el sistema financiero venezolano en
                  el área de Gerencia de servicios al cliente. Mis intereses
                  profesionales están orientados a efectuar una transición de
                  carrera específicamente hacia el sector IT en los campos de
                  desarrollo de proyectos ágiles, desarrollo web y
                  transformación digital.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
