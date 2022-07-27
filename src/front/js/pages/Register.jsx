import React, { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [singIn, setSingIn] = useState({ user: "", password: "" });
  const handleChange = (event) => {
    setSingIn({ ...singIn, [event.target.name]: event.target.value });
  };

  const handleLogin = (data) => {
    // esta funcion registra usuario
    console.log(data);
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
            >
              Registro
            </p>
            <form>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Nombre completo"
                  name="user"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Correo"
                  name="user"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type={"button"}
                  className="btn btn-secondary w-100 my-4"
                  onClick={() => handleLogin(singIn)}
                  style={{ backgroundColor: "#1a2537" }}
                >
                  Registrar
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

export default Register;
