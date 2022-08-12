import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const AcercaDe = () => {
  return (
    <div style={{ backgroundColor: "#dde0ab" }}>
      <div className="container">
        <Button
          variant="succes m-3"
          style={{ backgroundColor: "#73b1c1", width: "250px" }}
          href="javascript: history.go(-1)"
        >
          Ir atrás
        </Button>
        <div className="row">
          <div className="col-12" style={{ margin: "20px" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>¿QUÉ ES ACOMPÁÑAME?</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>AcompáñaME</u>
                    </h2>{" "}
                    <br></br>
                    Es una aplicación útil, educativa y de estimulación
                    cognitiva destinada a pacientes con alzheimer y cuidadores
                    para saber convivir con la enfermedad.
                    <br></br>
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>¿QUÉ QUEREMOS LOGRAR?</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <br></br>
                    <ul>
                      <li>
                        Dar información útil, veraz y oportuna sobre la
                        enfermedad.
                      </li>
                      <br></br>
                      <li>
                        Educar y guiar a los cuidadores de los enfermos y así
                        despejar dudas.{" "}
                      </li>
                      <br></br>
                      <li>
                        Plataforma geolocalizable que conecta a los cuidadores
                        con los pacientes.
                      </li>
                      <br></br>
                      <li>
                        Establecer actividades y herramientas lúdicas que
                        permitan la estimulación cognitiva.
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>¿TIENES ALGUNA DUDA?</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <br></br>
                    Si tienes alguna duda, inquietud o sugerencia, puedes
                    comunicarte con nosotros al siguiente correo:
                    equipo.acompañame@gmail.com
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>¿TE GUSTARÍA APOYAR NUESTRO PROYECTO?</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <br></br>
                    Si te gustaría apoyar este incríble proyecto para seguir
                    creciendo y así mejorar nuestros servicios con el objetivo
                    de ofrecer la excelencia a pacientes y cuidadores,
                    entonces te invitamos a comunicarte con nosotros al siguiente correo:
                    equipo.acompañame@gmail.com
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
