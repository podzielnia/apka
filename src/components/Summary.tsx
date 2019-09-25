import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import tree from 'assets/tree.png';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReduxState } from 'store/reducers/rootReducer';

const OuterContainer = withStyles({
  root: {
    background: '#fff',
    height: '100vh',
    padding: '2rem 0.5rem 0rem 0.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})(Container);

const InnerContainer = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})(Container);

const StyledButton = withStyles({
  root: {
    margin: '2rem 1rem 1rem 1rem',
    background: '#dedfe8',
  },
})(Button);

const TransparentButton = withStyles({
  root: {
    background: 'none',
    '&:hover': {
      background: 'none',
    },
  },
})(Button);

const imgStyles = {
  minHeight: '8rem',
  height: '30rem',
  marginTop: '1.5rem',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#000',
};

interface Props {
  scoreCount: number;
}

export function Summary({ scoreCount }: Props) {
  return (
    <>
      <OuterContainer maxWidth="sm">
        <Typography variant="h6">Dzięki za udział w zabawie!</Typography>
        <Typography variant="h6" style={{ margin: '1.5rem' }}>
          {scoreCount}/10
        </Typography>
        <Typography variant="subtitle1">
          Fajnie, że zerowaste jest dla Ciebie ważne.
        </Typography>
        <Typography variant="subtitle1">Oby tak dalej!</Typography>
        <InnerContainer>
          <StyledButton>UDOSTĘPNIJ NA FACEBOOKU</StyledButton>
          <TransparentButton>
            <Link to="/" style={linkStyles}>
              Wróć do strony głównej
            </Link>
          </TransparentButton>
        </InnerContainer>
        <img
          src={tree}
          style={imgStyles}
          alt="tree illustration"
          className="summary__tree"
        />
      </OuterContainer>
    </>
  );
}

const mapStateToProps = (state: ReduxState) => {
  return {
    scoreCount: state.score.count,
  };
};

export default connect(mapStateToProps)(Summary);
