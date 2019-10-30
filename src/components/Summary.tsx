import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import menuImg from 'assets/img-menu.png';
import React from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';
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
          <FacebookProvider appId="536840990411199">
            <ShareButton
              href="https://odpadometr.podzielnia.pl"
              redirectURI="https://odpadometr.podzielnia.pl"
              quote="Quiz Po-Dzielni - sprawdź czy jesteś "
              hashtag="#zerowaste"
            >
              <StyledButton>UDOSTĘPNIJ NA FACEBOOKU</StyledButton>
            </ShareButton>
          </FacebookProvider>
          <img src={menuImg} className="summary-img" />
          <TransparentButton style={{ marginBottom: '10%' }}>
            <Link to="/" style={linkStyles}>
              Zagraj jeszcze raz
            </Link>
          </TransparentButton>
          <Button
            variant="outlined"
            href="https://podzielnia.pl"
            style={{ marginBottom: '.5rem' }}
          >
            Wróć do Po-Dzielni
          </Button>
          <Button variant="outlined" href="https://patronite.pl/Po-Dzielnia">
            PATRONITE Po-Dzielni
          </Button>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

const mapStateToProps = (state: ReduxState) => {
  return {
    scoreCount: state.score.goodAnswers,
  };
};

export default connect(mapStateToProps)(Summary);
