/*
 * VideoGameDetail
 *
 * Pagina que ves cuando haces click en un videojuego
 *
 */

import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Detail from '../../components/Detail';

export default function VGDetail() {
  return (
    <div>
      <Header />
      <Detail />
      <Footer />
    </div>
  );
}
