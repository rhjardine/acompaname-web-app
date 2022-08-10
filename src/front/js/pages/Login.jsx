import React, { useState, useContext } from "react";
import styles from "./Register.module.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      navigate("/home");
    } else {
      alert("no se puedo iniciar sesión");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="row justify-content-center align-items-center vh-100">
          <div
            className="col-12 col-md-6"
            style={{ backgroundColor: "#DDE0AB", borderRadius: 30 }}
          >
            <p className="text-start fs-1 text-center">Login</p>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Usuario"
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
                  type="button"
                  className="btn btn-secondary w-100 my-4"
                  onClick={() => handleLogin(singIn)}
                  style={{ backgroundColor: "#1a2537" }}
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
