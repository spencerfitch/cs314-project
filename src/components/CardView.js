import React from 'react';
import { createTheme } from '@mui/system';
import { Masonry } from '@mui/lab';

import Card from './Card';

const CardView = ({ cards, handleDelete, ...props}) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 850,
        lg: 1275,
        xl: 1700,
      }
    }
  })

  return (
    <Masonry theme={theme} columns={{xs: 1, sm: 1, md: 2, lg: 3, xl: 4}}>
      {
        cards.map((card, idx) => (
          <Card 
            key={idx} 
            data={card}
            handleDelete={() => handleDelete(idx)}
            style={{padding: '1em'}}
          />
        ))
      }
    </Masonry>
  );
};

export default CardView;
