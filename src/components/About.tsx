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
    background: '#fefcfd',
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
          <Typography variant="h6">
            ODOPADOMETR
          </Typography>         
          <Typography variant="subtitle1">
            Zapraszamy do zabawy, w której sprawdzisz, na ile Twój styl życia
            jest przyjazny dla świata. Czy produkujesz dużo odpadów, czy starasz
            się temu zapobiegać? 
            Sprawdź się!
          </Typography>
          <Typography variant="subtitle1" style={typographyStyles}>
            Aplikacja "Odpadometr, quiz o zero waste" powstała dzięki
            zaangażowaniu wolontariuszy „Po-Dzielni”: Darii, Joanny, Kaliny,
            Kuby, Moniki, Pauliny i Sumo dzięki wsparciu Fundacji Enea.
           </Typography>
          <Typography variant="subtitle1" style={typographyStyles}>            
            Korzystanie z niej jest darmowe.
          </Typography>
        </Container>
        <Typography variant="subtitle2" style={{ textAlign: 'center' }}>
          Copyright: Po-Dzielnia
        </Typography>
      </OuterContainer>
    </>
  );
}
