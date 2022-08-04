import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Choose = () => {
  const [singIn, setSingIn] = useState({ user: "", password: "" });
  const handleChange = (event) => {
    setSingIn({ ...singIn, [event.target.name]: event.target.value });
  };

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    // esta funcion registra usuario fetch (intento)
    const result = await actions.logIn(data);
    if (result) {
      navigate("/choose");
    } else {
      alert("no se puedo iniciar sesión");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="row justify-content-center align-items-center vh-100">
          <div
            className=" col-12 col-md-6"
            style={{ backgroundColor: "#DDE0AB", borderRadius: 30 }}
          >
            <p
              className="text-start fs-1 text-center"
              style={{ color: "#1a2537" }}
            ></p>
            <form>
              <div>
                <button
                  type={"button"}
                  className="tarjeta btn btn-secondary w-100 my-4"
                  onClick={() => handleLogin(singIn)}
                  //style={{ backgroundColor: "#1a2537" }}
                >
                  Usuario
                </button>
                <button
                  type={"button"}
                  className="tarjeta btn btn-secondary w-100 my-4"
                  onClick={() => handleLogin(singIn)}
                  // style={{ backgroundColor: "#1a2537" }}
                >
                  Cuidador
                </button>
                <button
                  type={"button"}
                  className="tarjeta btn btn-secondary w-100 my-4"
                  onClick={() => handleLogin(singIn)}
                  //style={{ backgroundColor: "#1a2537" }}
                >
                  Paciente
                </button>
                <p className="text-start fs-6 text-center">
                  Al registrarte, aceptas nuestras Condiciones de uso y Política
                  de privacidad.
                </p>
                <p className="text-start fs-6 text-center">
                  ¿Ya tienes una cuenta?
                  <a href="/Login/" className="text-decoration-none">
                    Iniciar Sesion
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;