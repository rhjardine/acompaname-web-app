import React, { Component } from "react";

import "./Footer/Footer.css";

export const Footer = () => (
  <section className="footer">
    <hr className="footer-seperator" />
    <section className="footer-social-media">
      <a
        href="http://www.4geeksacademy.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        4Geeks Academy Venezuela
      </a>
    </section>
    <section className="footer-info">
      <section className="footer-info-left">
        <section className="footer-info__name">
          Proyecto Web App AcompañaME (MVP)
          <br />
          Participantes:
        </section>
        <section className="footer-info__returns">
          Robianna De La Parra
          <br />
          José Perestrelo
          <br />
          Pedro Maldonado
          <br />
          Richard Jardine
        </section>
      </section>
      <section className="footer-info-center">
        <section className="footer-info__email"></section>
        <section className="footer-info__terms">
          Terminos y Condiciones
          <br />
          Todos los Derechos Reservados
        </section>
      </section>
      <section className="footer-info-right">
        <section className="footer-info__number">Año 2022</section>
        <section className="footer-info__contact">
          Profesores
          <br />
          Ernesto Medina
          <br />
          Bryan Garcia
          <br />
          José Morrone
        </section>
      </section>
    </section>
    <hr className="footer-seperator" />
  </section>
);
