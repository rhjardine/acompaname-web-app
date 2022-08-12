import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Healthme = () => {
  return (
    <div style={{ backgroundColor: "#dde0ab" }}>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ margin: "20px" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>MENÚ DE ALIMENTACIÓN ANTIENVEJECIMIENTO</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>Información suministrada por Cano Health</u>
                    </h2>{" "}
                    Se estima que casi 5.8 millones de Estadounidenses viven con
                    la enfermedad de alzheimer (AD). La mayoría de esas personas
                    son mayores de 65 años. Los expertos prevén que este número
                    se duplique cada 5 a 10 años, y de aquí al 2050 habrán cerca
                    de 14 millones de personas con el trastorno. Todos los
                    tratamientos actuales para la AD son solo para síntomas
                    leves, incluidos problemas con el razonamiento y el
                    pensamiento, pero no todas las personas responden a esos
                    medicamentos. Además, estos agentes también tienen efectos
                    adversos que no siempre son tolerables. Ninguno de los
                    tratamientos disponibles actualmente ha demostrado retrasar
                    o prevenir la progresión de la enfermedad. Pero en el
                    horizonte, nuevos estudios están iluminando el camino para
                    mayor ayuda en el futuro.
                    <br></br>
                    <br></br>A medida que las neuronas cerebrales mueren, los
                    síntomas empeoran y la mayoría de las personas con AD
                    requieren admisión en centros de atención a largo plazo a
                    medida que se vuelven inmanejables en casa. Durante las
                    últimas tres décadas, los investigadores han tratado de
                    encontrar tratamientos que puedan retrasar o prevenir la AD.
                    Con una comprensión cada vez mayor de cómo la AD afecta a
                    las neuronas en el cerebro, finalmente ha habido un avance
                    de la cura para el alzheimer en 2022. La mayoría de las
                    investigaciones se han enfocado en las placas en el cerebro
                    de los individuos con AD. Esas placas aparecen antes de que
                    se desarrollen los síntomas y si se puede encontrar una
                    manera de prevenir la acumulación de placas, se puede evitar
                    potencialmente el desarrollo de los síntomas.
                    <br></br>
                    <br></br>
                    <h2>
                      {" "}
                      <u>Los Nuevos Tratamientos para la AD</u>
                    </h2>{" "}
                    <br></br>
                    Los estudios novedosos sobre la cura y los tratamientos
                    potenciales del alzheimer han mostrado algunos resultados
                    prometedores.
                    <br></br>
                    <br></br>
                    <u>Disolución de las placas:</u> La mayor parte del enfoque
                    actual en el manejo de la AD se ha dirigido a las placas de
                    proteínas conocidas como amiloide. Esas placas son una
                    característica clásica del trastorno y a menudo se depositan
                    temprano en el cerebro. Las personas que desarrollan esas
                    placas en el cerebro son más propensas a desarrollar
                    síntomas de AD que las personas sin placas. Por lo tanto, se
                    han desarrollado varios fármacos (anticuerpos monoclonales)
                    que previenen la formación o agrupación de esas placas
                    amiloides. Los anticuerpos monoclonales son muy similares a
                    los anticuerpos naturales en la circulación sanguínea, pero
                    tienen un solo objetivo: beta amiloide. Desafortunadamente,
                    el amiloide no se encuentra en todos los pacientes con AD y
                    se desconoce por qué ocurre eso. Se cree que cerca del 30% a
                    35% de los pacientes con AD con síntomas leves a moderados
                    pueden no tener amiloide cerebral, y por lo tanto no pueden
                    beneficiarse de ese tratamiento.
                    <br></br>
                    <br></br>
                    <u>Aducanumab:</u> el año pasado, la Administración de
                    Alimentos y Medicamentos de los Estados Unidos aprobó
                    Aducanumab, que se conoce como anticuerpo monoclonal, para
                    el tratamiento de casos selectos de AD leve. Este es el
                    único fármaco aprobado en los Estados Unidos para el
                    tratamiento de las placas amiloides en el cerebro. Una vez
                    que se eliminan las placas, las células cerebrales dejan de
                    morir y la memoria, el pensamiento, la función y el
                    comportamiento del paciente dejan de empeorar. Sin embargo,
                    todavía hay debate sobre si el medicamento realmente
                    funciona. Si bien varios ensayos pequeños han demostrado que
                    el fármaco no solo previene la agregación de amiloide, sino
                    que también disminuye los síntomas, otros ensayos clínicos
                    no han demostrado ningún beneficio. Además, aún no existen
                    datos a largo plazo sobre ese agente y si puede prevenir la
                    demencia. Sin embargo, existe la esperanza de un avance
                    decisivo en la cura para alzheimer en 2022.
                    <br></br>
                    <br></br>
                    Actualmente, Aducanumab solo está aprobado para su uso en
                    pacientes seleccionados con deterioro cognitivo leve o
                    enfermedad de alzheimer temprana. Antes de que se pueda
                    administrar el tratamiento, todas las personas con AD deben
                    someterse a una exploración por TEP para determinar si
                    tienen placas amiloides.
                    <br></br>
                    <br></br>
                    Varios otros anticuerpos monoclonales también han sido
                    desarrollados (Gantenerumab, Lecanemab y Donanemab) por
                    diferentes fabricantes de fármacos y también se dirigen al
                    amiloide en el cerebro. Todos esos agentes se están
                    evaluando actualmente en ensayos clínicos.
                    <br></br>
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>¿CÓMO SE ADMINISTRA ADUCANUMAB?</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <br></br>
                    Para tomar el medicamento, necesita una infusión intravenosa
                    cada cuatro semanas por el resto de su vida. Esto significa
                    ir a un hospital o una clínica donde se inserta un tubo
                    intravenoso y se infunde el anticuerpo monoclonal lentamente
                    durante varias horas. El anticuerpo monoclonal Gantenerumab
                    se puede administrar debajo de la piel, y uno puede
                    administrar el fármaco en casa; sin embargo, esa técnica
                    requiere cierta habilidad y herramientas.
                    <br></br>
                    <ul>
                      <li>
                        Hinchazón cerebral que puede causar dolores de cabeza,
                        cambios en el estado mental, vómitos y dificultad para
                        caminar.
                      </li>
                      <br></br>
                      <li>Caídas.</li>
                      <br></br>
                      <li>Diarreas.</li>
                      <br></br>
                      <li>Confusión.</li>
                    </ul>
                    Todos los pacientes que reciben Aducanumab deben ser
                    monitoreados de cerca por un equipo de médicos. Si se
                    desarrollan estos efectos secundarios, el medicamento debe
                    suspenderse inmediatamente.
                    <br></br>
                    <br></br>
                    Por el momento, se están llevando a cabo más ensayos
                    clínicos para determinar sus efectos secundarios a largo
                    plazo. Algunas aseguradoras han rechazado la cobertura de
                    Aducanumab y solo unos pocos centros en los EE.UU. ofrecen
                    esa terapia.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>OTROS TRATAMIENTOS NOVEDOSOS PARA EL ALZHEIMER</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <ul>
                      <li>
                        Prevenir la destrucción de las neuronas. Otros
                        investigadores se han enfocado en el tratamiento para la
                        AD que previene la destrucción de las neuronas
                        importantes. El anticuerpo monoclonal saracatinib ha
                        demostrado en estudios en animales que revierte la
                        pérdida de memoria y reanuda la función de las neuronas.
                        El fármaco se está evaluando actualmente en un pequeño
                        ensayo clínico.
                      </li>
                      <br></br>
                      <li>
                        Prevenir enredos: otros investigadores están buscando
                        fármacos que puedan prevenir la formación de enredos en
                        el cerebro de individuos con AD. Se ha demostrado que
                        una proteína llamada tau forma enredos en pacientes con
                        AD y esto se ha relacionado con la demencia y los
                        problemas de comportamiento. Actualmente, los
                        inhibidores de tau y las vacunas de tau se están
                        evaluando en ensayos clínicos.
                      </li>
                      <br></br>
                      <li>
                        Disminución de la inflamación: muchos científicos creen
                        que en la AD, el cerebro está en un estado de
                        inflamación crónica de bajo nivel, que continúa dañando
                        los nervios. Por lo tanto, se están desarrollando
                        fármacos que tienen un efecto antiinflamatorio.
                        Actualmente, el medicamento Sargramostim está en estudio
                        para determinar si puede ayudar a los pacientes con AD.
                      </li>
                      <br></br>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>SER CANDIDATO PARA ADUCANUMAB</h4>
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
                      <u>
                        Para ser elegible para el tratamiento con Aducanumab,
                        uno debe cumplir con los siguientes criterios:
                      </u>
                    </h2>{" "}
                    <ul>
                      <li>Tener menos de 85 años.</li>
                      <br></br>
                      <li>Tener deterioro cognitivo leve confirmado.</li>
                      <br></br>
                      <li>
                        Someterse a una exploración por TEP para determinar la
                        presencia de placas amiloides.
                      </li>
                      <br></br>
                      <li>
                        No tener antecedentes recientes de un accidente
                        cerebrovascular o sangrado en el cerebro.
                      </li>
                      <br></br>
                      <li>No tomar medicamento anticoagulante.</li>
                      <br></br>
                    </ul>
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

export default Tratamientos;
