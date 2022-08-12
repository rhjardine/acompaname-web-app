import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FcHome } from "react-icons/fc";

const SoyCuidador = () => {
  return (
    <div style={{ backgroundColor: "#dde0ab" }}>
      <div className="container">
        <Button
          variant="succes m-3"
          style={{ backgroundColor: "#73b1c1", width: "250px" }}
          href="javascript: history.go(-1)"
        >
          <FcHome /> Atrás
        </Button>
        <div className="row">
          <div className="col-12" style={{ margin: "20px" }}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>AUTOCUIDADO</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h2>
                      {" "}
                      <u>¿Qué es el autocuidado? </u>
                    </h2>{" "}
                    El autocuidado parte de la premisa de que se deben atender
                    las propias necesidades: emocionales, físicas y sociales.
                    <br></br>
                    <br></br>
                    Las necesidades emocionales solo podrán ser atendidas
                    adecuadamente cuando la persona que cuida sea capaz de
                    identificarlas. Es importante saber poner nombre a lo que se
                    siente y se experimenta para poder gestionarlo de forma
                    saludable.
                    <br></br>
                    <br></br>
                    Por otro lado, la salud física tiene un impacto crucial en
                    el bienestar de las personas y, para mantenerla, quien cuida
                    debe atenderse también esa esfera. Es fundamental que la
                    persona cuidadora de un ser querido con alzheimer, pueda
                    dedicarse un tiempo a sí misma para poder asegurar la
                    realización de las revisiones médicas necesarias, el
                    seguimiento de una nutrición adecuada, un descanso
                    reparador, una actividad física regular...
                    <br></br>
                    Además, para la salud psicológica, es muy importante
                    mantener aficiones y actividades de ocio y sociales que, o
                    bien ya tenía antes del diagnóstico de la enfermedad de su
                    familiar, o nuevas oportunidades que le puedan resultar
                    atractivas en el momento actual. De hecho, este aspecto
                    ayuda también a desarrollar un carácter resiliente.
                    <br></br>
                    <br></br>
                    En síntesis, el bienestar global de la persona cuidadora
                    influye en la calidad de las atenciones que le debe prestar
                    a su ser querido dependiente y, para maximizarlo, es
                    primordial que entienda que también debe cuidar de sí misma
                    a diferentes niveles.
                    <br></br>
                    En síntesis, el bienestar global de la persona cuidadora
                    influye en la calidad de las atenciones que le debe prestar
                    a su ser querido dependiente y, para maximizarlo, es
                    primordial que entienda que también debe cuidar de sí misma
                    a diferentes niveles.
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>CUIDAR SU PROPIO CUERPO</h4>
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
                        Los cuidadores de personas con Alzheimer deben de cuidar
                        su propio cuerpo
                      </u>
                    </h2>
                    <br></br>
                    Hay que propiciar el descanso y liberarse de las tensiones
                    del día a día o tratar de disminuirlas. Quien cuida debe
                    cuidarse también físicamente para poder ocuparse mejor de su
                    familiar y atender adecuadamente a las exigencias del día a
                    día. Encontrarse bien físicamente le ayudará a afrontar
                    situaciones difíciles o conflictivas, como posibles
                    alteraciones de conducta o la progresiva pérdida de
                    autonomía de la persona afectada.
                    <br></br>
                    <br></br>
                    Algunos consejos para las personas cuidadoras pueden ser:
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Dormir lo suficiente. La falta de sueño puede provocar
                        déficit de atención, irritabilidad, somnolencia
                        persistente... Y disminuir la paciencia necesaria que
                        requiere la atención de una persona con alzheimer.
                      </li>
                      <br></br>
                      <li>
                        Hacer ejercicio con regularidad. La actividad física es
                        una buena aliada para combatir los síntomas depresivos y
                        ansiosos, así como para rebajar tensiones.
                      </li>
                      <br></br>
                      <li>
                        Practicar la relajación. Exponerse a altos niveles de
                        estrés de forma continuada tiene importantes
                        consecuencias sobre la salud. Realizar regularmente
                        ejercicios de relajación y de respiración pueden ser de
                        gran ayuda para controlar, gestionar y reducir la
                        ansiedad y sus consecuencias.
                      </li>
                      <br></br>
                      <li>
                        Ante la persistencia de cualquier síntoma físico
                        (pérdida de energía, alteraciones de sueño, falta de
                        apetito, dolores, etcétera) es importante consultar con
                        un profesional de la salud que pueda evaluar la
                        situación y, si fuera el caso, dar las recomendaciones
                        pertinentes o prescribir el tratamiento más adecuado.
                      </li>
                      <br></br>
                    </ul>
                    <br></br>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>CUIDAR LAS EMOCIONES</h4>
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
                      <u>Reconocer y aceptar los sentimientos</u>
                    </h2>
                    <br></br>
                    Es muy importante reconocer y aceptar los propios
                    sentimientos sin juzgarlos. Profundizar en el
                    autoconocimiento permite identificar emociones y reconocer
                    las propias necesidades. Es importante no rechazar o
                    “prohibirse” ningún sentimiento. Es más, la aceptación de
                    los sentimientos negativos es clave para aprender a
                    gestionarlos y lleva a vivir más intensamente los positivos.
                    <br></br>
                    <br></br>
                    Las personas que cuidan pueden sentir angustia o tener
                    pensamientos recurrentes que no pueden evitar. Muchas ideas
                    que provocan angustia suelen generarse por la anticipación a
                    posibles situaciones no deseables. Aprender a vivir el día a
                    día, evitando el catastrofismo y la excesiva anticipación
                    favorecerá una mayor gestión de esta sensación. No obstante,
                    el hecho de planificar algunas cuestiones futuras, como
                    informarse sobre la gestión de plaza en una residencia o
                    buscar una persona que pueda ayudar en los cuidados del
                    familiar, favorece la sensación de control y seguridad.
                    <br></br>
                    <br></br>
                    Debido a la variación y la imprevisibilidad de los síntomas
                    en la evolución de la enfermedad, es fácil que el estado de
                    ánimo del cuidador también fluctúe por el desconcierto o el
                    agotamiento que ello le puede producir.
                    <br></br>
                    <br></br>
                    Así, quien cuida de una persona con alzheimer puede
                    experimentar cambios de humor, irritabilidad o nerviosismo.
                    Conocer la evolución de la enfermedad y comprender que esta
                    puede desencadenar una gran diversidad de emociones y
                    sensaciones en el cuidador será de ayuda para enfrentarse
                    con más entereza a situaciones conflictivas.
                    <br></br>
                    <br></br>
                    Además, poder expresar estos sentimientos y reconocer la
                    necesidad de ayuda y la utilidad de recibirla, contribuirá a
                    mantener y mejorar su bienestar.
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>PRESERVAR LA VIDA SOCIAL Y RELACIONES</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    Quien cuida de una persona con alzheimer debe reorganizar su
                    vida social, salir de casa, disfrutar de la compañía de
                    otras personas, realizar actividades compartidas y recuperar
                    el interés por aficiones o intereses con los que antes
                    disfrutaba o encontrar nuevas oportunidades de ocio.
                    <br></br>
                    <br></br>
                    Inmerso en la tarea de atender a su familiar, el cuidador
                    puede tender a abandonar el autocuidado, aislarse, abandonar
                    otras actividades o alejarse de sus amistades. Sin embargo,
                    su capacidad, a pesar de su buena voluntad, tiene límites,
                    como la de todo el mundo. Sobrepasarlos solo puede conllevar
                    consecuencias no deseables a su bienestar y, probablemente,
                    a su salud.
                    <br></br>
                    <br></br>
                    La participación de otros familiares y/o allegados en el
                    cuidado puede beneficiar tanto a cuidadores como a personas
                    afectadas por la enfermedad, ya que contribuye a la creación
                    o al fortalecimiento de ciertos vínculos y a mejorar la
                    comunicación y la solidez de la estructura familiar.
                    <br></br>
                    <br></br>
                    Buscar apoyo familiar y social ayudará a evitar el
                    aislamiento del cuidador. Pedir ayuda no es síntoma de
                    debilidad y aceptarla tiene una gran utilidad como
                    herramienta terapéutica.
                    <br></br>
                    <br></br>
                    La ayuda profesional y/o de otras personas que están pasando
                    por una situación similar puede representar un cambio muy
                    importante en el bienestar del cuidador. Las asociaciones de
                    familiares ofrecen recursos de apoyo para cuidadores y otras
                    entidades cuentan con grupos terapéuticos para cuidadores de
                    personas con alzheimer.
                    <br></br>
                    <br></br>
                    Así, uno de los principales consejos para personas
                    cuidadoras es el autocuidado, teniendo en cuenta su propio
                    estado físico, emocional y social. Todo ello contribuirá a
                    sentirse mejor, estar con mejor predisposición para afrontar
                    los distintos momentos del día a día, a comunicarse mejor y
                    a fortalecer la relación con otros miembros de la familia.
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>LOS RIESGOS DEL CUIDADOR</h4>
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#73b1c1", borderRadius: "20px" }}
                >
                  <div
                    className="accordion-body"
                    style={{ backgroundColor: "#feffdf", borderRadius: "20px" }}
                  >
                    <h4>
                      {" "}
                      <u>
                        ¿CUÁLES SON LOS RIESGOS A LOS QUE ESTÁ EXPUESTO UN
                        CUIDADOR?
                      </u>
                    </h4>{" "}
                    <br></br>
                    <h5>
                      <u>ALTERACIONES FÍSICAS:</u>
                    </h5>{" "}
                    Ya en 2004, Badía et al. en su estudio encontraron que casi
                    el 85% de los cuidadores desarrollan problemas físicos,
                    destacando como los más frecuentes, dolores de cabeza
                    (52,2%), dolores de espalda (60,4%), ahogos (73%), insomnio
                    o sueño no reparador (68,7%), fatiga y cansancio (77,6%) y
                    fracturas óseas o esguinces (14,2%), y en 2021 las cosas
                    poco han cambiado. Entre las alteraciones físicas más
                    frecuentes, encontramos: Cansancio/fatiga persistente.
                    Alteraciones del sueño. Cefalea. Problemas
                    gastrointestinales Trastornos osteo-musculares Trastornos
                    metabólicos.
                    <br></br>
                    <br></br>
                    <h5>
                      <u>ALTERACIONES PSICOLÓGICAS:</u>
                    </h5>{" "}
                    Para evitar problemas (tanto físicos como psicológicos) o
                    minimizarlos, es muy importante que el cuidador tome
                    conciencia de que tiene que cuidarse y esa toma de
                    conciencia tiene que estar presente desde el principio,
                    desde que se conoce el diagnóstico del paciente.
                    Preocupación: irritabilidad, sentimientos de culpa y
                    aislamiento. Tristeza Depresión Ansiedad Pensamientos
                    erróneos.
                    <br></br>
                    <br></br>
                    Buscar apoyo familiar y social ayudará a evitar el
                    aislamiento del cuidador. Pedir ayuda no es síntoma de
                    debilidad y aceptarla tiene una gran utilidad como
                    herramienta terapéutica.
                    <br></br>
                    <br></br>
                    <h5>
                      <u>EMOCIONES MÁS FRECUENTES LA NEGACIÓN:</u>
                    </h5>{" "}
                    Es frecuente al aparecer los primeros síntomas, achacando
                    estos a la edad, a un momento puntual o al temor de que sea
                    un problema más grave y después al recibir el diagnóstico.
                    Aparece como un mecanismo de defensa para enfrentarse a la
                    situación y adaptarse a ella, pero si se prolonga en el
                    tiempo, la no aceptación del diagnóstico puede nublar la
                    toma de decisiones importantes y mermar la capacidad para
                    ayudar a la persona enferma.
                    <br></br>
                    <br></br>
                    EL MIEDO: Es una emoción surgida como reacción ante el
                    diagnóstico y ante lo desconocido, pero asentarse en el
                    miedo y vivir con el miedo de que pasará, puede llevar al
                    cuidador a no centrarse en el presente.
                    <br></br>
                    <br></br>
                    LA TRISTEZA: Es un sentimiento que suele aparecer al conocer
                    el diagnóstico, pero no puede vivirse ni convertirse en
                    persistente, aún siendo muy dolorosa la situación, por las
                    consecuencias que tiene tanto sobre el enfermo como sobre el
                    cuidador.
                    <br></br>
                    <br></br>
                    LA PREOCUPACIÓN Es inevitable y nace del pensar “que pasará
                    mañana”, pero hay que vivir el presente, el mañana ya
                    llegará.
                    <br></br>
                    <br></br>
                    EL ESTRÉS/ANSIEDAD: Son también muy frecuentes y nacen del
                    “no saber cómo actuar” y del “no saber que pasará”, por lo
                    que derivado de esto último, con el avance de la enfermedad
                    en que las necesidades y cuidados son mayores, el stress y
                    la ansiedad pueden ir a más. Hay que pedir ayuda.
                    <br></br>
                    <br></br>
                    LA FRUSTRACIÓN Y LA IMPOTENCIA: Son emociones que también
                    nacen del desconocimiento del manejo y/o a veces de no
                    conseguir atender, calmar, consolar al paciente. Son
                    sentimientos frecuentemente aflorados cuando hay trastornos
                    de conducta. Hay que pedir ayuda.
                    <br></br>
                    <br></br>
                    EL AGOTAMIENTO: Aparece con el avance de la enfermedad y
                    nace de carga física y psíquica, derivada de los cuidados al
                    paciente. Cuando aparece hay que pedir ayuda, la atención al
                    paciente con Enfermedad de Alzheimer, debería ser
                    compartida.
                    <br></br>
                    <br></br>
                    EL DOLOR: Una emoción presente durante toda la etapa del
                    cuidador, al principio reactivo al deterioro que va
                    sufriendo el paciente, después reactivo a que el paciente
                    pierde su identidad dejando un gran vacío emocional y
                    finalmente por la pérdida de la persona cuidada. Ignorar
                    estas emociones, sentimientos y síntomas, deteriora la salud
                    física y mental de ahí la importancia de consultarlos y
                    compartirlos cuando aparecen con su médico u otros
                    profesionales que puedan ayudarle.
                    <br></br>
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

export default SoyCuidador;
