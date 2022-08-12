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

      {/* <div className="container1" style="height: auto;"></div>
      <div className="row align-items-center"></div>
        <div className="col-md-9 ml-auto mr-auto mb-3 text-center bg-bl-nw">
          <h2 className="login_header">Cuestionario de Salud </h2>
  </div> */}

      {/* <div className="container1">
        <div className="row align-items-center">
          <h2 className="col align-items-center">Calcula tu Edad Biológica</h2>
=======
      <div className="title">
        <div className="centerText">
          <h2 className="centerText">Test Edad Biológica</h2>
>>>>>>> 6eace99cdcb63137cc81653ae4773d007ff51ad5
        </div>
      </div> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h3 className="row justify-content-center">
              Determina tu Edad Biológica
            </h3>
            <p>
              Muchos factores determinan el envejecimiento de una persona, por
              lo que no siempre la edad cronológica se corresponde con la edad
              aparente. Son determinantes hábitos saludables, tanto físicos como
              mentales. Esta diferencia se acentúa más en la medida que pasan
              los años. Con el siguiente test se puede calcular de forma muy
              efectiva la edad real de una persona, en base a algunos de sus
              hábitos y costumbres. este método es utilizado utilizado por
              especialistas en prestigiosas clínicas de Europa y ha sido creado
              por un grupo multidisciplinario de investigadores de la salud. El
              test lógicamente no es perfecto, pero puede resultar muy útil para
              conocer si debemos preocuparnos por el estilo de vida que llevamos
              y si es necesario modificarlo. Si usted es más viejo que sus años,
              no es tarde para hacer algo. Estudios indican que hacer ejercicio
              tiene resultados instantáneos y que cambiar la alimentación aunque
              se tengan entre 40 o 50 años hace una gran diferencia para la
              longevidad.
            </p>

            <p>
              <h6>¿Por qué interesa conocer la edad biológica?</h6>
              La edad biológica es, en esencia, la edad funcional de cada célula
              de un organismo. Conocer este factor es muy importante en la
              prevención de diferentes enfermedades asociadas al envejecimiento,
              como la demencia, el Alzhéimer o la diabetes. Determinando la edad
              biológica, podemos saber cuán susceptible es una persona a estas
              enfermedades y aconsejarle ciertos hábitos para poder frenar de
              alguna manera este envejecimiento. Otra aplicación importante es
              la utilización de la edad biológica como estimación de la edad
              cronológica o el estado de salud de una persona en el ámbito de la
              genética forense. Los diferentes métodos de estimación de la edad
              biológica pueden ayudar a identificar el origen de las muestras
              biológicas de la escena de un crimen.
            </p>

            <img
              src={require("../pages/Imagenes/Edad_Biologica.png").default}
            />

            <div>
              <h6> Test Cualitativo</h6>
            </div>

            <form className="my-5">
              <div className="select">
                <label>Cual es su edad</label>
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
              <div className="form-group mb-4"></div>
              <label>¿Cuál es su sexo o genero</label>
=======
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
                <option>Masculino</option>
                <option>Femenino</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Con cuántos amigos compartes tus problemas?</label>
              <select className="form-select mb-4" aria-label="abdomen">
                {/* <div><select class="campos" id="amigos"> */}
                <option value="+1">Con ninguno</option>
                <option value="-0.5">Con uno a tres amigos</option>
                <option value="-1">Con cuatro o más</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿A qué edad crees que vas a morir?</label>
              <select className="form-select mb-4" aria-label="morir">
                {/* <option selected></option> */}
                <option value="+2">Antes de los 75</option>
                <option value="+1">Entre los 76 y los 90</option>
                <option value="+0">Entre los 91 y 99</option>
                <option value="-2">Después de los 100</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Cuántos abrazos o besos recibes por semana?</label>
              <select className="form-select mb-4" aria-label="afectos">
                {/* <option selected></option> */}
                <option value="+1">Ninguno</option>
                <option value="-0.5">De 1 a 3</option>
                <option value="-1">Cuatro o más</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>
                ¿Puedes tocarte los talones con tus piernas derechas?
              </label>
              <select className="form-select mb-4" aria-label="talones">
                {/* <option selected></option> */}
                {/* <option selected="selected" value="-1">Fácilmente</option> */}
                <option value="+0">Si empujo un poco</option>
                <option value="+0.5">Casi puedo</option>
                <option value="+1">Entre 2 y 5 cm</option>
                <option value="+2">Imposible</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Cuál es la forma de tu cuerpo?</label>
              <select className="form-select mb-4" aria-label="condicionf">
                {/* <option selected></option> */}
                {/* <div><select class="campos" id="peso"> */}
                {/* <option selected="selected" value="+3">Obesa</option> */}
                <option value="+2">Ligero sobrepeso</option>
                <option value="+1">Cinco kilos de sobrepeso</option>
                <option value="-1.5">Perfecta para mi altura</option>
                <option value="-1">Por debajo del peso</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Cuán grande es tu barriga?</label>
              <select className="form-select mb-4" aria-label="abdomen">
                {/* <option selected></option> */}
                {/* <div><select class="campos" id="barri"> */}
                <option value="+2">Muy grande</option>
                <option value="+1.5">Redonda</option>
                <option value="+0">Casi chata</option>
                <option value="-0.5">Sin ninguna</option>
              </select>

              <div className="form-group mb-4"></div>
              <label></label>
              <select className="form-select mb-4" aria-label="condiciof">
                <option selected></option>
                {/* <div><select class="campos" id="cansancio"> */}
                <option value="+2">Casi todos los días</option>
                <option value="+1.5">
                  Casi todos los días después de almorzar
                </option>
                <option value="+0.5">A veces</option>
                <option value="-1">Nunca</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>
                ¿Cuánto es lo más que has bebido en un día el último año?
              </label>
              {/* <div><select class="campos" id="bebida"> */}
              <select className="form-select mb-4" aria-label="abdomen">
                <option value="+0">Tres vasos o copas o menos</option>
                <option value="+0.5">Cuatro vasos</option>
                <option value="+1">Cinco o menos</option>
                <option value="+1.5">Más de cinco</option>
              </select>

              {/* </select></div>¿Fumas?</td><td><div><select class="campos" id="fuma">
				<option selected="selected" value="-3">No, nunca fumé</option>
				<option value="-2">Dejé hace 5 años o más</option>	
				<option value="-1">Dejé hace 3 a 5 años</option>
				<option value="+0">Dejé hace 1 a 3 años</option>
				<option value="+1">Dejé este año</option>
				<option value="+3">Si, fumo</option>					
</select> */}

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
