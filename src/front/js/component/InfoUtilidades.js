import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FcHome } from "react-icons/fc";

const InfoUtilidades = () => {
  return (
    <div style={{ backgroundColor: "#dde0ab" }}>
      <div className="container">
        <Button
          variant="succes m-3"
          style={{ backgroundColor: "#73b1c1", width: "250px" }}
          href="javascript: history.go(-1)"
        >
          <FcHome />
          Atrás
        </Button>
        <div className="row">
          <div className="col-12" style={{ margin: "20px" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>CONOZCA MÁS</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>¿Qué es Alzheimer? </u>
                    </h2>{" "}
                    La enfermedad de Alzheimer es un trastorno cerebral que
                    destruye lentamente la memoria, la capacidad de pensar y,
                    con el tiempo, la habilidad de llevar a cabo hasta las
                    tareas más sencillas.
                    <br></br>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Etapas</u>
                    </h2>
                    <br></br>
                    <h3>Etapa temprana:</h3> La persona puede desenvolverse de
                    forma independiente. Es posible que pueda conducir, trabajar
                    y participar de actividades sociales. Pero, puede sentir que
                    tiene episodios de pérdida de memoria como olvidarse
                    palabras familiares o la ubicación de objetos cotidianos.
                    <br></br>
                    <br></br>
                    <h3>Etapa media:</h3> Es la fase más prolongada, puede durar
                    muchos años. Además de los síntomas anteriores puede
                    presentar desorientación, confundir palabras, cambios en su
                    temperamento como enojo, frustración y actúa de forma
                    inesperada. También ya deja de hacer ciertas tareas
                    cotidianas debido al daño de las células nerviosas del
                    cerebro.
                    <br></br>
                    <br></br>
                    <h3>Etapa final:</h3> Las personas pierden la capacidad de
                    responder a su entorno, de llevar adelante una conversación
                    y de controlar los movimientos. A medida que la memoria y
                    las habilidades cognitivas empeoran, es posible que ocurran
                    cambios significativos en la personalidad. Los pacientes
                    requieren de ayuda en su totalidad
                    <br></br>
                    <br></br>
                    <h2>
                      {" "}
                      <u>¿Cómo cuidarme?</u>
                    </h2>
                    <br></br>
                    Con ayuda de su familiar o cuidador deben hacer diversos
                    planes que le permita mantener estimulada la parte
                    cognitiva. Estas son algunas cosas que usted puede hacer:
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Haga actividades que concuerde con algo que, siendo
                        paciente con Alzheimer, puede hacer, ejemplo: tareas
                        domésticas, jugar memoria, pintar, ordenar, visitar
                        familiares y recordar momentos con fotografías.
                      </li>
                      <br></br>
                      <li>
                        Seleccione actividades que puedan ser divertidas tanto
                        para usted como paciente y su familiar o cuidador.
                      </li>
                      <br></br>
                      <li>Dejarse siempre ayudar.</li>
                      <br></br>
                      <li>Evite frustrarse, téngase paciencia.</li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>CUIDADORES</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>Pasos tras el diagnóstico</u>
                    </h2>
                    <br></br>
                    Un ser querido con alzheimer necesitará apoyo en los
                    diferentes ámbitos de su vida tras el diagnóstico, por lo
                    que debe primeramente ser empático y documentarse sobre la
                    enfermedad para saber cómo su familiar percibirá de ahora en
                    adelante su mundo con demencia.
                    <br></br>
                    <br></br>
                    Después de ello tome en cuenta lo siguiente:
                    <br></br>
                    <br></br>
                    <ul>
                      <li>Asumir nuevas responsabilidades.</li>
                      <br></br>
                      <li>
                        Prevenir y siempre estar atento a posibles retos y
                        problemas.
                      </li>
                      <br></br>
                      <li>
                        Promueva actividades que sean estimulantes y que pueda
                        disfrutar su familiar con alzhéimer.
                      </li>
                      <br></br>
                      <li>
                        Tener personas y objetos comunes alrededor. Puede ser
                        útil tener álbumes de fotos familiares.
                      </li>
                      <br></br>
                      <li>
                        Brindar recordatorios, notas, listas de tareas
                        rutinarias o instrucciones para las actividades diarias.
                      </li>
                      <br></br>
                      <li>Ceñirse a un horario de actividades simple.</li>
                      <br></br>
                      <li>
                        Hablar con su familiar de cualquier tema que sean
                        eventos actuales.
                      </li>
                      <br></br>
                      <li>
                        Tener siempre los números de emergencia guardados.
                      </li>
                      <br></br>
                      <li>
                        Incrementar la seguridad en la casa, para evitar
                        accidentes.
                      </li>
                      <br></br>
                      <li>
                        Apoyo médico, de otros familiares, conocidos o vecinos.
                        También apoyarse de ONG’s e instituciones o cuidadores
                        especializados en la materia.
                      </li>
                    </ul>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Actuar en cada Etapa</u>
                    </h2>
                    <br></br>
                    <h3>Etapa temprana:</h3>
                    <br></br>
                    El objetivo es que mantenga el bienestar físico, la salud y
                    tranquilidad.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Potenciar su independencia: que haga por sí mismo cuanto
                        le sea posible para que así no olvide sus rutinas, se
                        mantenga útil, autónomo y no decaiga su autoestima.
                      </li>
                      <br></br>
                      <li>
                        Ayudar al paciente a planificar: sea actividades que
                        puede ayudar a mantener activa la parte cognitiva.
                      </li>
                      <br></br>
                      <li>Prevenir cualquier accidente.</li>
                    </ul>
                    <br></br>
                    <h3>Etapa media:</h3>
                    <br></br>
                    Esta fase supone una pérdida progresiva de su autonomía, la
                    familia debe informarse de lugares que brinden apoyo.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Formar equipos familiares: que puedan ayudar al paciente
                        porque y se turnen en sus cuidados, pues para una
                        persona agota física y psicológicamente.
                      </li>
                      <br></br>
                      <li>
                        Buscar centros de ayuda o cuidadores: que les permitan
                        cuidar al paciente por algunas horas.
                      </li>
                      <br></br>
                      <li>
                        Centros de estimulación cognitiva: buscar lugares donde
                        el paciente pueda hacer ejercicio físico y mental.
                      </li>
                    </ul>
                    <br></br>
                    <h3>Etapa final:</h3>
                    <br></br>
                    Es la fase más complicada y a su vez más retadora tanto para
                    el paciente como para el familiar, por lo que ambas partes
                    requieren apoyo de especialistas.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Apoyarse en familia: se deben turnar con los cuidados
                        del paciente, ya que requieren de más atención. También
                        establecer planes de emergencia.
                      </li>
                      <br></br>
                      <li>
                        Buscar apoyo psicológico: para familiares y cuidadores
                        porque la enfermedad desgasta mentalmente y puede
                        presentar síndrome del cuidador principal.
                      </li>
                      <br></br>
                      <li>
                        Buscar apoyo médico: no solo para el paciente sino
                        también para familiares porque agota físicamente para
                        ellos.
                      </li>
                    </ul>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Síndrome del cuidador</u>
                    </h2>
                    <br></br>
                    El síndrome del cuidador es un conjunto de alteraciones
                    físicas, psíquicas y sociales que suele experimentar el
                    cuidador principal con el paso del tiempo. Estas
                    alteraciones afectan a todos los ámbitos de su vida familiar
                    y personal. Su sistema inmune puede verse afectado, ya que
                    le baja las defensas y es propenso a tener enfermedades
                    infecciosas como gripes, laringitis, dolores de cabeza etc…
                    También se agotan mentalmente y pueden presentar mucha
                    fatiga, enfado, frustración, tristeza, ansiedad entre otros.
                    Y, por supuesto, también puede llegar a aislarse, dejar de
                    hacer vida social y sus rutinas. Entonces, es necesario
                    detectar estas pequeñas alertas del síndrome del cuidador y
                    hablar del problema, buscar apoyo de otros y de psicólogos.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>RECURSOS EN LA RED</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>Mira las últimas publicaciones sobre alzheimer:</u>
                    </h2>
                    <br></br>
                    <h6>
                      Identificadas variantes en APOE que reducen riesgo de
                      desarrollar Alzheimer{" "}
                      <a
                        href="https://genotipia.com/genetica_medica_news/apoe4-alzheimer-2/"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      Mejora el mapa genómico de la enfermedad de Alzheimer{" "}
                      <a
                        href="https://genotipia.com/genetica_medica_news/mejora-el-mapa-genomico-alzheimer/"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      Descubren una proteína que protege al cerebro de la
                      enfermedad de Alzheimer{" "}
                      <a
                        href="https://genotipia.com/genetica_medica_news/proteina-protege-alzheimer/"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Manuales sobre alzheimer:</u>
                    </h2>
                    <br></br>
                    <h6>
                      Guía para Familiares de Enfermos de Alzheimer:“Querer
                      cuidar, saber hacerlo”{" "}
                      <a
                        href="https://fiapam.org/wp-content/uploads/2013/12/GuiaAlzheimer.pdf"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      Manual para el cuidador de pacientes con demencia{" "}
                      <a
                        href="https://www.imserso.es/InterPresent1/groups/imserso/documents/binario/03_manual_pacientesdemencia.pdf"
                        target="_blank"
                      >
                        (Hagaclic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      La Enfermedad de Alzheimer: Manual del cuidador{" "}
                      <a
                        href="https://www.snpv.org/contenidos/files/snpv_enlaces/0003.pdf"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Películas, documentales y series:</u>
                    </h2>
                    <br></br>
                    <h6>
                      Piedad. Documental sobre el alzhéimer. Por Otto Roca.
                    </h6>
                    <br></br>
                    <h6>
                      Still Alice. Película sobre la vida de una profesora tras
                      ser diagnosticada con alzheimer. Por Richard Glatzer, Wash
                      Westmoreland.
                    </h6>
                    <br></br>
                    <h6>
                      Bicicleta, cuchara y manzana. Documental sobre la vida del
                      político catalán, Pasqual Maragall, y su enfermedad
                      alzhéimer. Por Carles Bosch.
                    </h6>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>RUTINAS DE EJERCICIOS</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h6>
                      Ejercicios para personas con alzheimer en etapa inicial{" "}
                      <a
                        href="https://www.youtube.com/watch?v=VBZCRtfCOoE"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      Ejercicios para mejorar el equilibrio y marcha autónoma{" "}
                      <a
                        href="https://www.youtube.com/watch?v=Ta3O86qZrms"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
                    <br></br>
                    <h6>
                      Ejercicio de fisioterapia para personas con alzheimer{" "}
                      <a
                        href="https://www.youtube.com/watch?v=tewMao6oWik"
                        target="_blank"
                      >
                        (Haga clic aquí)
                      </a>
                    </h6>
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

export default InfoUtilidades;
