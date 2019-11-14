import React from 'react';
import { Container, CircularProgress, Typography} from '@material-ui/core';

function Detail() {

  return <CircularProgress size={100} color="primary"/>;

  // return (
  //   <Container>
  //     <Typography variant="h2"> Titulo del videojuego </Typography>
  //     <CircularProgress size={100} color="primary"/> <img alt="caraturala del videojuego">
  //     <Typography>Aqui va un texto descriptivo del videojuego a modo de sinopsis de la historia o resumen para llamar la atención y venderlo, es decir, con la indención de generar interes por parte del usuario en comprar este juego</Typography>
  //     <Typography><strong>Consolas disponibles:</strong><Typography>
  //     <Typography><strong>Precio: </strong> x€<Typography>
  //   </Container>
  // );

}

export default Detail;
