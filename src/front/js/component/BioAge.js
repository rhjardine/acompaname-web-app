import React, { useState } from "react";

import Form from "react-bootstrap/Form";

const BioAge = () => {
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false)
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

  //destructuracion
  const { edad, amigos, morir } = biological

  function handleChange(event) {
    setBiological({
      ...biological,
      [event.target.name]: event.target.value,
    });
  }

  function handleCalculate() {
    //medidas

    if (edad <= 25) {
      console.log("edad mayor a 25")
    }
    if (amigos == "ninguno") {
      setResult(parseInt(edad) + 1)
    } else if (amigos == "unoATres") {

      setResult(parseInt(edad) - 0.5)
    } else {
      setResult(result - 1)
    }
    
    //a que edad vas a morir
    if (morir == "sumaUno") {
      setResult(parseInt(edad) + 1)
    } else if (morir == "restaDos") {
      setResult(parseInt(edad) - 2)
    }

  }
  <option value="restaDos">Después de los 100</option>
  return (
    <>
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
              <label>¿Cuál es su sexo</label>
              <div className="form-group mb-4"></div>
              <select className="form-select mb-4" name="sexo" aria-label="abdomen" onChange={handleChange}>
                <option value="">Seleccione Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Con cuántos amigos compartes tus problemas?</label>
              <select className="form-select mb-4" aria-label="abdomen" name="amigos" onChange={handleChange}>
                <option value="">Seleccionar un campo</option>
                <option value="ninguno">Con ninguno</option>
                <option value="unoATres">Con uno a tres amigos</option>
                <option value="masCuatro">Con cuatro o más</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿A qué edad crees que vas a morir?</label>
              <select className="form-select mb-4" aria-label="morir" name="morir" onChange={handleChange}>
                <option selected>Seleccione un campo</option>
                <option value="sumaDos">Antes de los 75</option>
                <option value="sumaUno">Entre los 76 y los 90</option>
                <option value="igual">Entre los 91 y 99</option>
                <option value="restaDos">Después de los 100</option>
              </select>

              {/* <div className="form-group mb-4"></div>
              <label>¿Cuántos abrazos o besos recibes por semana?</label>
              <select className="form-select mb-4" aria-label="afectos">
                {/* <option selected></option> 
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
              {/* <option selected="selected" value="-1">Fácilmente</option> 
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
              {/* <option selected="selected" value="+3">Obesa</option> 
                <option value="+2">Ligero sobrepeso</option>
                <option value="+1">Cinco kilos de sobrepeso</option>
                <option value="-1.5">Perfecta para mi altura</option>
                <option value="-1">Por debajo del peso</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Cuan grande es tu abdomen?</label>
              <select className="form-select mb-4" aria-label="abdomen">
                {/* <option selected></option> */}
              {/* <div><select class="campos" id="barri"> 
                <option value="+2">Muy grande</option>
                <option value="+1.5">Redonda</option>
                <option value="+0">Casi chata</option>
                <option value="-0.5">Sin ninguna</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Con qué frecuencia sientes cansancio?</label>
              <select className="form-select mb-4" aria-label="condiciof">
                {/* <div><select class="campos" id="cansancio"> 
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
              {/* <div><select class="campos" id="bebida"> 
              <select className="form-select mb-4" aria-label="bebidas">
                <option value="+0">Tres vasos o copas o menos</option>
                <option value="+0.5">Cuatro vasos</option>
                <option value="+1">Cinco o menos</option>
                <option value="+1.5">Más de cinco</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Tomas refrescos o jugos sintéticos o industriales?</label>
              <select className="form-select mb-4" aria-label="sinteticas">
                {/* <div><select class="campos" id="jugos">
                <option value="-1">Nunca</option>
                <option value="+0.5">Uno a tres vasos por semana</option>
                <option value="+1">Cuatro a seis vasos</option>
                <option value="+2">Más de siete</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Eres fumador?</label>
              <select className="form-select mb-4" aria-label="fumador">
                {/* <div><select class="campos" id="jugos">
                <option value="-2">Dejé hace 5 años o más</option>
                <option value="-1">Dejé hace 3 a 5 años</option>
                <option value="+0">Dejé hace 1 a 3 años</option>
                <option value="+1">Dejé este año</option>
                <option value="+3">Si, fumo</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>
                ¿Tienes muchos arreglos dentales o tus encías sangran cuando las
                cepillas?
              </label>
              <select className="form-select mb-4" aria-label="dentales">
                {/* <div><select class="campos" id="dientes"> 
                <option value="+1.5">
                  Si sangran y son más de 10 los dientes arreglados
                </option>
                <option value="+1">4 a 10 dientes arreglados</option>
                <option value="+0.5">1 a 3 dientes arreglados</option>
                <option value="+0">No</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>
                ¿Cuántas veces por semana caminas o realizas ejercicio por 30
                minutos o más?
              </label>
              <select className="form-select mb-4" aria-label="ejercicios">
                "{/* <div><select class="campos" id="caminar"> */}
              {/* <option selected="selected" value="+1"> 
                <option value="+0">Nunca</option>
                <option value="+0">De 1 a 2</option>
                <option value="-0.5">De 3 a 4</option>
                <option value="-1.5">Cinco o más</option>
              </select>

              <div className="form-group mb-4"></div>
              <label><h6>¿Haz consumido antibióticos los últimos cinco años?</h6></label>
              <select className="form-select mb-4" aria-label="antibioticos">
                {/* <div><select class="campos" id="dientes"> 
                <option value="-2">No</option>
                <option value="+2">Una a dos veces</option>
                <option value="+5">Tres o más veces</option>
              </select>

              <div className="form-group mb-4"></div>
              <label><h6>¿Cuántos resfríos sufristes el último año?</h6></label>
              {/* <div><select class="campos" id="resfrio"> 
              <select className="form-select mb-4" aria-label="resfrios">
                {/* <option selected="selected" value="+1.5"> 
                <option>Cinco o más</option>
                <option value="+1">Tres o cuatro</option>
                <option value="-0.5">Uno o dos</option>
                <option value="-1"> Ninguno</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>¿Consumes enlatados y comidas en conserva?</label>
              <select className="form-select mb-4" aria-label="enlatados">
                "{/* <div><select class="campos" id="conservas"> 
                {/* <option selected="selected" value="-3">Para todas las comidas</option> 
                <option value="+1">La mayoría</option>
                <option value="-1">
                  Para menos de la mitad de mis comidas
                </option>
                <option value="-2">Nunca uso comida en conservas</option>
              </select>

              <div className="form-group mb-4"></div>
              <label>
                ¿Cuántes veces por semana te sientes demasiado lleno después de
                comer?
              </label>
              {/* <div><select class="campos" id="lleno"> 
              <select className="form-select mb-4" aria-label="enlatados">
                <option value="+3">Más de siete veces</option>
                <option value="+2">De 3 a 6</option>
                <option value="+1">De 1 a 2</option>
                <option value="-1.5">Nunca</option>
              </select> */}
              {error && <p className="alert alert-danger"></p>}
              <button type="button" onClick={() => handleCalculate()}>
                Calcular Edad Biológica
              </button>
            </form>

            <div class="alert alert-success" role="alert">
              {`Tu edad biológica es: ${result}`}
            </div>
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
