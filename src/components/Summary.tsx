import React from 'react';
import { Link } from 'react-router-dom';

export default function Summary() {
  return (
    <>
      <h4>Podsumowanie</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        repudiandae! Vel, aperiam debitis officia officiis quam laborum.
      </p>
      <button>UDOSTĘPNIJ NA FACEBOOKU</button>
      <button>
        <Link to="/">Wróć do strony głównej</Link>
      </button>
    </>
  );
}
