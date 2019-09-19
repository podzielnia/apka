import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReduxState } from 'store/reducers/rootReducer';

interface Props {
  score: number;
}

export function Summary({ score }: Props) {
  return (
    <>
      <h4>Podsumowanie</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        repudiandae! Vel, aperiam debitis officia officiis quam laborum.
      </p>
      Wynik: {score}/10
      <button>UDOSTĘPNIJ NA FACEBOOKU</button>
      <button>
        <Link to="/">Wróć do strony głównej</Link>
      </button>
    </>
  );
}

const mapStateToProps = (state: ReduxState) => {
  return {
    score: state.score.score,
  };
};

export default connect(mapStateToProps)(Summary);
