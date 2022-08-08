import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Team = () => {
  const [singIn, setSingIn] = useState({ user: "", password: "" });
  const handleChange = (event) => {
    setSingIn({ ...singIn, [event.target.name]: event.target.value });
  };

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    return (
      <>
        <div class="our-team-section">
          <div class="member-container">
            <h3 class="member-name">Robianna De La Parra</h3>
            <p class="member-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printe
            </p>
            <a href="" class="button">
              ¡Conóceme!
            </a>
            <div class="socials-container">
              <img src="Resources/FacebookBlanco.png" alt="" class="icon" />
              <img src="Resources/InstagramBlanco.png" alt="" class="icon" />
              <img src="Resources/LinkedinBlanco.png" alt="" class="icon" />
              <img src="Resources/TwitterBlanco.png" alt="" class="icon" />
            </div>
          </div>

          <div class="member-container">
            <h3 class="member-name">José Perestrelo</h3>
            <p class="member-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printe
            </p>
            <a href="" class="button">
              ¡Conóceme!
            </a>
            <div class="socials-container">
              <img src="Resources/FacebookBlanco.png" alt="" class="icon" />
              <img src="Resources/InstagramBlanco.png" alt="" class="icon" />
              <img src="Resources/LinkedinBlanco.png" alt="" class="icon" />
              <img src="Resources/TwitterBlanco.png" alt="" class="icon" />
            </div>
          </div>

          <div class="member-container">
            <h3 class="member-name">Pedro Maldonado</h3>
            <p class="member-description">
              Más de 20 años de experiencia como realizador audiovisual con
              experiencia en producción de eventos corporativos en vivo.
              Actualmente estudiando programación web.
            </p>
            <a href="" class="button">
              ¡Conóceme!
            </a>
            <div class="socials-container">
              <img src="Resources/FacebookBlanco.png" alt="" class="icon" />
              <img src="Resources/InstagramBlanco.png" alt="" class="icon" />
              <img src="Resources/LinkedinBlanco.png" alt="" class="icon" />
              <img src="Resources/TwitterBlanco.png" alt="" class="icon" />
            </div>
          </div>

          <div class="member-container">
            <h3 class="member-name">Richard Jardine</h3>
            <p class="member-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printe
            </p>
            <a href="" class="button">
              ¡Conóceme!
            </a>
            <div class="socials-container">
              <img src="Resources/FacebookBlanco.png" alt="" class="icon" />
              <img src="Resources/InstagramBlanco.png" alt="" class="icon" />
              <img src="Resources/LinkedinBlanco.png" alt="" class="icon" />
              <img src="Resources/TwitterBlanco.png" alt="" class="icon" />
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Team;
