import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const BioAge = () => {
  const [result, setResult] = useState("");
  const [biological, setBiological] = useState({
    edad: 0,
    sexo: "",
    nombres: "",
    fumador: "",
    abdomen: "",
    amigos: "",
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <form className="my-5">
              <div className="form-group">
                <label>Edad</label>
                <input
                  type="number"
                  placeholder="Ingrese Edad "
                  className="form-control"
                  name="edad"
                  value={biological.edad}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={() => handleCalculate()}>
                Calcular Edad
              </button>
            </form>
            {`Esta es tu edad biológica: ${result}`}
          </div>
        </div>
      </div>
    </>
  );
};

export default BioAge;

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
      <form action="https://pacientes.nutriwhitesalud.com/nutriwhiteOpenAssesmentResults" method="post" className="form-horizontal" enctype="multipart/form-data" >
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
  /* ------------------------------------ Código del Test Europeo Edad Biológica --------------------------------------------------------------------- */
}
