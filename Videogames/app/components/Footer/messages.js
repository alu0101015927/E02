import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  about: {
    id: `${scope}.about`,
    defaultMessage: 'Somos una pagina de videojuegos..',
  },
  contacto: {
    id: `${scope}.contacto`,
    defaultMessage: `
      Twitter {icon1}
      Instagram {icon2}
      LinkedIn {icon3}
    `,
  },
  map: {
    id: `${scope}.map`,
    defaultMessage: `
    {ubic}
    Camino San Francisco de Paula {ubic1}
    `,
  },
  licencia: {
    id: `${scope}.licencia`,
    defaultMessage: '© 2019 Copyright Text',
  },
});
