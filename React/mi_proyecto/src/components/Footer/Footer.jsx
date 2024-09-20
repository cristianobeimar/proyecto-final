import React from 'react'
import "./Footer.css";

export const Footer =()=> {
  return (
    <div>
      <footer>
        <p>¿Preguntas? Llama al <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <ul>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Centro de ayuda</a></li>
          <li><a href="#">Cuenta</a></li>
          <li><a href="#">Prensa</a></li>
          <li><a href="#">Relaciones con inversionistas</a></li>
          <li><a href="#">Términos de uso</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Preferencias de cookies</a></li>
          <li><a href="#">Información corporativa</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;