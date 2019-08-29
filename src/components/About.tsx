import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Bar from './Bar';

const containerStyles = {
  padding: '3rem 2rem',
};

export default function About() {
  return (
    <>
      <Bar>O PROJEKCIE</Bar>
      <Container style={containerStyles}>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          repudiandae! Vel, aperiam debitis officia officiis quam laborum. Quod
          nostrum, fugit vitae eligendi sint nesciunt possimus porro,
          voluptatibus, adipisci deleniti assumenda! Explicabo, vero? Soluta
          quam enim, dicta dolores quaerat velit atque amet voluptates commodi
          voluptatum perspiciatis eveniet molestiae accusamus totam. Accusamus
          veritatis aliquam maxime asperiores dicta sunt accusantium fugit
          aspernatur quam.
        </Typography>
      </Container>
    </>
  );
}
