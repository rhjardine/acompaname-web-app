import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return 
    <div class="img__back"></div>
    </div>
    <div class="description">
        <h2>Mi Salud</h2>
        <p>Conoce tu edad biológica y el riesgo precoz de padecer la enfermedad de Alzheimer.</p>
        <input type="button" value="Accede">
    </div>
</div>

<div class="card">
    <div class="cover">
        <img src="images/p2.png" alt="">
        <div class="img__back"></div>
    </div>
    <div class="description">
        <h2>Tratamientos</h2>
        <p>Explore los nuevos avances para tratar la enfermedad de Alzheimer</p>
        <input type="button" value="Accede">
    </div>
</div>

<div class="card">
    <div class="cover">
        <img src="images/p3.png" alt="">
        <div class="img__back"></div>
    </div>
    <div class="description">
        <h2>Coordenadas</h2>
        <p>Conoce la ubicación de tu ser querido usando geolocalización geográfica.</p>
        <input type="button" value="Accede">
    </div>
</div>

<div class="card">
    <div class="cover">
        <img src="images/p4.png" alt="">
        <div class="img__back"></div>
    </div>
    <div class="description">
        <h2>Mis Alertas</h2>
        <p>Obten las notificaciones oportunas de seguimiento del tratamiento.</p>
        <input type="button" value="Accede">
    </div>
</div>
	
    
<!-- --------MENU LATERAL -->
        </main>
    <div class="menu__side" id="menu_side">

        <div class="name__page">
            <!-- <i class="fa-brands fa-adn"></i> -->
            <i class="fa-brands fa-adn fa-2x"></i>
            <strong><h4>AcompañaME</h4></strong>
        </div>

        <div class="options__menu">	

            <a href="#" class="selected">
                <div class="option">
                    <i class="fas fa-home" title="Inicio"></i>
                    <h4>Inicio</h4>
                </div>
            </a>


            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-people-group" title="Nosotros"></i>
                    <h4>Nosotros</h4>
                </div>
            </a>
           

            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-blog" title="Blog"></i>
                    <h4>Blog</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-address-card" title="Contacto"></i>
                    <h4>Contactanos</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-blog" title="Blog"></i>
                    <h4>Cerrar Sesión</h4>
                </div>
            </a>

        </div>
