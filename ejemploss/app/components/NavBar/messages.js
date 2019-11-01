import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.NavBar';

export default defineMessages({
  inicio: {
    id: `${scope}.inicio`,
    defaultMessage: 'Inicio',
  },
  novedades: {
    id: `${scope}.novedades`,
    defaultMessage: 'Ultimas novedades',
  },
  buscador: {
    id: `${scope}.buscador`,
    defaultMessage: 'Buscar juegos',
  },
  registro: {
    id: `${scope}.registro`,
    defaultMessage: 'Registrarse',
  },
  iniciar: {
    id: `${scope}.iniciar`,
    defaultMessage: 'Iniciar sesion',
  },
  cerrar: {
    id: `${scope}.cerrar`,
    defaultMessage: 'Cerrar sesion',
  },
});
