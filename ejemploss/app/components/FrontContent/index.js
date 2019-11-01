import React from 'react';

import NewVideogames from '../NewVideogames';
import Videogamesonsale from '../Videogameonsale';
import VideoGamescategory from '../VideoGamescategory';
import NewsList from '../NewsList';

function FrontContent() {
  return (
    <div>
      <NewVideogames />
      <Videogamesonsale />
      <VideoGamescategory />
      <NewsList />
    </div>
  );
}

export default FrontContent;
