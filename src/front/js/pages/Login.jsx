import React, { useState } from "react";
import styles from "./Register.module.css";

const Login = () => {
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
            className="col-12 col-md-6"
            style={{ backgroundColor: "#DDE0AB", borderRadius: 30 }}
          >
            <p className="text-start fs-1 text-center">Login</p>
            <form>
              <div className="form-group">
                <label>Usuario</label>
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
