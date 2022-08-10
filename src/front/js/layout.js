import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Choose from "./pages/Choose.jsx";
import Ubicacion from "./pages/Ubicacion.jsx";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import InfoUtilidades from "./component/InfoUtilidades";
import Tratamientos from "./component/Tratamientos";
import SoyCuidador from "./component/SoyCuidador";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Ubicacion />} path="/ubicacion" />
              <Route element={<Choose />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
              <Route element={<Choose />} path="/choose" />
              <Route element={<Demo />} path="/demo" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<Home />} path="/home" />

              <Route
                element={<InfoUtilidades />}
                path="/informacion/utilidades"
              />
              <Route
                element={<Tratamientos />}
                path="/informacion/tratamientos"
              />
              <Route
                element={<SoyCuidador />}
                path="/informacion/soycuidador"
              />
              <Route element={<Tratamientos />} path="/home" />

              <Route element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
};

export default injectContext(Layout);
