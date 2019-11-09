import React, { useState } from 'react';
import { Container, Typography, Card, Grid, Textfield } from '@material-ui/core';

export default () => {

  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = event => {
    setSearchText()
  };

  return(

    <Container>
      <Card>
        <Textfield
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}/>
      </Card>
    </Container>

  );

}
