import React, { useState } from "react";

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
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
                  onClick={() =>handleLogin(singIn)}
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
