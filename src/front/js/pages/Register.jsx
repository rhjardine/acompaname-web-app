import React, { useContext, useState } from "react";
import styles from "./Register.module.css";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const [singIn, setSingIn] = useState({ user: "", password: "", email: "" });
  const handleChange = (event) => {
    setSingIn({ ...singIn, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();

  const handleLogin = async (data) => {
    // esta funcion registra usuario
    const result = await actions.signUp(data, params.naturaleza);
    if (result) {
      navigate("/home");
      alert("Se ha registrado correctamente");
    } else {
      alert("El usuario no puede ser creado. Revise e intenté de nuevo");
    }
  };

  useEffect(() => {
    console.log(params.naturaleza);
  }, []);

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
                  value={singIn.user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Correo"
                  name="email"
                  value={singIn.email}
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
                  value={singIn.password}
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
