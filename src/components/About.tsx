import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Bar from './Bar';

const OuterContainer = withStyles({
  root: {
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    background: '#fff',
  },
})(Container);

const typographyStyles = {
  marginTop: '2rem',
  marginBottom: '2rem',
};

export default function About() {
  return (
    <>
      <Bar>O PROJEKCIE</Bar>
      <OuterContainer>
        <Container>
          <Typography variant="subtitle1">
            Zapraszamy do zabawy, w której sprawdzisz, na ile Twój styl życia
            jest przyjazny dla świata. Czy produkujesz dużo odpadów, czy starasz
            się temu zapobiegać? Każdy Twój ruch sprawi, że nasze drzewko
            pokryje się pięknymi liśćmi lub będzie usychać… Postaraj się je
            zazielenić!
          </Typography>
          <Typography variant="subtitle1" style={typographyStyles}>
            Aplikacja „…..” powstała dzięki zaangażowaniu wolontariuszy
            „Po-Dzielni”.
          </Typography>
          <Typography variant="subtitle1" style={typographyStyles}>
            przy współpracy Fundacji Enea. Korzystanie z niej jest darmowe.
          </Typography>
        </Container>
        <Typography variant="subtitle2" style={{ textAlign: 'center' }}>
          Copyright: Po-Dzielnia
        </Typography>
      </OuterContainer>
    </>
  );
}
