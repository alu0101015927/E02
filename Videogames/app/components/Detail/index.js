import React from 'react';
// import Wrapper from './Wrapper';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



function Detail() {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Pristine</Typography>
        <Rating name="pristine" value={null} />
      </Box>
    </div>
  );
}

export default Detail;

// <Wrapper>
//   <CssBaseline />
//   <CircularProgress size={100} color="primary" component="div" alt="caraturala del videojuego"/>
//   <Typography variant="h2"> Titulo del videojuego </Typography>
//   <Typography>Aqui va un texto descriptivo del videojuego a modo de sinopsis de la historia o resumen para llamar la atención y venderlo, es decir, con la indención de generar interes por parte del usuario en comprar este juego</Typography>
//   <Typography><strong>Consolas disponibles:</strong></Typography>
//   <Typography><strong>Precio: </strong> x€</Typography>
//
// </Wrapper>
