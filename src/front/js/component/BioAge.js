import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const BioAge = () => {
  const [result, setResult] = useState("");
  const [biological, setBiological] = useState({
    edad: "",
    sexo: "",
    nombres: "",
    fumador: "",
    abdomen: "",
    amigos: "",
    talones: "",
    afectos: "",
    refrescos: "",
    morir: "",
    enlatados: "",
    antibioticos: "",
    condicionf: "",
    alcohol: "",
    agotado: "",
    ejercicios: "",
    ejerfuerza: "",
  });

  function handleChange(event) {
    setBiological({
      ...biological,
      [event.target.name]: event.target.value,
    });
  }

  function handleCalculate() {
    setResult(biological.edad);
  }

  return (
    <>
      {/* --------------------Trabajo de Deimian-------------------------- */}
      <div className="title">
        <div className="centerText">
          <h2 className="centerText">Test Edad Biológica</h2>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <form className="my-5">
              <div className="select">
                <label>Edad</label>
                <input
                  type="number"
                  placeholder="Ingrese su Edad "
                  className="form-control"
                  name="edad"
                  min="25"
                  max="125"
                  value={biological.edad}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label>Sexo</label>
                <input
                  type="text"
                  placeholder="Ingrese su género (M o F) "
                  className="form-control"
                  name="sexo"
                  min="10"
                  max="12"
                  value={biological.sexo}
                  onChange={handleChange}
                />
              </div>

              <select className="form-select mb-4" aria-label="abdomen">
                <option selected>¿Cuál es la forma de tu cuerpo</option>
                <option value="+1">Con ninguno</option>
                <option value="-0.5">Con uno a tres amigos</option>
                <option value="-1">Con cuatro o más</option>
              </select>

              <select className="form-select mb-4" aria-label="morir">
                <option selected>¿A qué edad crees que vas a morir?</option>
                <option value="+2">Antes de los 75</option>
                <option value="+1">Entre los 76 y los 90</option>
                <option value="+0">Entre los 91 y 99</option>
                <option value="-2">Después de los 100</option>
              </select>

              <select className="form-select mb-4" aria-label="afectos">
                <option selected>
                  ¿Cuántos abrazos o besos recibes por semana?
                </option>
                <option value="+1">Ninguno</option>
                <option value="-0.5">De 1 a 3</option>
                <option value="-1">Cuatro o más</option>
              </select>

              <select className="form-select mb-4" aria-label="talones">
                <option selected>
                  ¿Puedes tocarte los talones con tus piernas derechas?
                </option>
                {/* <option selected="selected" value="-1">Fácilmente</option> */}
                <option value="+0">Si empujo un poco</option>
                <option value="+0.5">Casi puedo</option>
                <option value="+1">Entre 2 y 5 cm</option>
                <option value="+2">Imposible</option>
              </select>

              <select className="form-select mb-4" aria-label="condicionf">
                <option selected>¿Cuál es la forma de tu cuerpo?</option>
                {/* <div><select class="campos" id="peso"> */}
                {/* <option selected="selected" value="+3">Obesa</option> */}
                <option value="+2">Ligero sobrepeso</option>
                <option value="+1">Cinco kilos de sobrepeso</option>
                <option value="-1.5">Perfecta para mi altura</option>
                <option value="-1">Por debajo del peso</option>
              </select>

              <select className="form-select mb-4" aria-label="abdomen">
                <option selected>¿Cuán grande es tu barriga?</option>
                {/* <div><select class="campos" id="barri"> */}
                <option value="+2">Muy grande</option>
                <option value="+1.5">Redonda</option>
                <option value="+0">Casi chata</option>
                <option value="-0.5">Sin ninguna</option>
              </select>

              <select className="form-select mb-4" aria-label="condiciof">
                <option selected>¿Con qué frecuencia sientes cansancio?</option>
                {/* <div><select class="campos" id="cansancio"> */}
                <option value="+2">Casi todos los días</option>
                <option value="+1.5">
                  Casi todos los días después de almorzar
                </option>
                <option value="+0.5">A veces</option>
                <option value="-1">Nunca</option>
              </select>

              <button type="button" onClick={() => handleCalculate()}>
                Calcular Edad
              </button>
            </form>
            {`Tu edad biológica es: ${result}`}
          </div>
        </div>
      </div>
    </>
  );
};

export default BioAge;

{
  /* 
              <div className="form-group">
                <label>Usted fuma? con cuanta frecuencia</label>
                <input
                  type="text"
                  placeholder="Ingrese con que frecuencia "
                  className="form-control"
                  name="fumador"
                  value={biological.fumador}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Cual es la medida de su abdomen (circunferencia)</label>
                <input
                  type="number"
                  placeholder="Ingrese la medida en cm "
                  className="form-control"
                  name="cintura"
                  value={biological.cintura}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Cuantos amigos tiene ?</label>
                <input
                  type="number"
                  placeholder="Escoja la opción "
                  className="form-control"
                  name="amigos"
                  value={biological.amigos}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label></label>
                <input
                  type="number"
                  placeholder="Ingrese Edad "
                  className="form-control"
                  name="edad"
                  value={biological.edad}
                  onChange={handleChange}
                />
              </div> */
}

{
  /* <div className="container" style="height: auto;">
  <div className="row align-items-center">
    <div className="col-md-9 ml-auto mr-auto mb-3 text-center bg-bl-nw">
      <h2 className="login_header">Cuestionario para Determinar su Edad Biológica Aproximada </h2>
    </div>
    
    <div className="card">
      <div className="card-header card-header-primary">
          <div className="card-title">
              ¡Mide tus síntomas y transforma tu salud!
          </div>
      </div>
      <div className="card-body col-md-12">
                    <p>Este es un cuestionario con preguntas claves para conocer el funcionamiento de tus órganos, emociones y sistemas en el cuerpo. Cuando lo llenas, te da un puntaje total que hace referencia a tu estado de salud actual.</p>
          <p style="padding: 11px;justify: center;">Entre más alto sea el puntaje, es posible que tengas más inflamación. No constituye una prueba definitiva<b className="nw-bold" style="color: #0095a8;">20 puntos</b> es recomendable realizar cita personalizada y tener las herramientas para potenciar tu salud.</p>
      </div>
    </div>
    
    <div className="col-md-12">
      <form action="https:pacientes.nutriwhitesalud.com/nutriwhiteOpenAssesmentResults" method="post" className="form-horizontal" enctype="multipart/form-data" >
          <input type="hidden" name="_token" value="kHkCjf1FID4LcwpbPox3PmGLkLEVTbQOVqWYyh3b">                    
          
          <div className="card">
              <div className="card-header card-header-primary">
                  <div className="card-title">
                      <p className="card-category">Indicaciones</p>
                  </div>
              </div>


      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  );
}
) */
}

{
  /* <div className="container" style="height: auto;">
  <div className="row align-items-center">
    <div className="col-md-9 ml-auto mr-auto mb-3 text-center bg-bl-nw">
      <h2 className="login_header">Cuestionario para Determinar su Edad Biológica Aproximada </h2>
    </div>
    
    <div className="card">
      <div className="card-header card-header-primary">
          <div className="card-title">
              ¡Mide tus síntomas y transforma tu salud!
          </div> */
}
