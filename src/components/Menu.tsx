import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <h2>PODZIELNIA LOGO</h2>
      <button>
        <Link to={'/quiz'}>Nowa gra</Link>
      </button>
      <button>
        <Link to={'/about'}>O projekcie</Link>
      </button>
    </div>
  );
}
