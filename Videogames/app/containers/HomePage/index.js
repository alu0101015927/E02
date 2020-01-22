/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


export default function HomePage() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
