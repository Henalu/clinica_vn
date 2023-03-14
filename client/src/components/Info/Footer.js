import React from 'react'
import { Link } from 'react-router-dom';
import instagram from '../../img/logoinstagram.png';
import facebook from '../../img/logofacebook.png';
import youtube from '../../img/logoyoutube.png';
import twitter from '../../img/logotwitter.png';

const Footer = () => {
  return (
    <div>
      <footer class="bg-neutral-200 grid place-content-center">
        <div class="container pt-4 ">
          <div class="mb-9 flex justify-center">
            <a href="https://es-es.facebook.com/clinicavieiteznunez/" class="h-1 w-11 mr-9"><img src={facebook}/></a>
            <a href="https://www.instagram.com/clinicavieiteznunez/" class="h-1 w-11 mr-9"><img src={instagram}/></a>
            <a href="#!" class="h-1 w-11 mr-9"><img src={youtube}/></a>
            <a href="#!" class="h-1 w-11 mr-9"><img src={twitter}/></a>
          </div>
        </div>
        <div class="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          Copyright © 2023 Clínica Viéitez Núñez. Todos los derechos reservados.
          <div class="text-neutral-800 dark:text-neutral-400">
            <Link to="/legalwarning"> Aviso legal |</Link>
            <Link to="/privacypolicy"> Política de privacidad |</Link>
            <Link to="/cookies"> Política de cookies |</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
