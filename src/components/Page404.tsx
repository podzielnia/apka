import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <p>Strona nie została odnaleziona</p>
      <button>
        <Link to="/">Wróć do strony głównej</Link>
      </button>
    </div>
  );
};

export default Page404;
