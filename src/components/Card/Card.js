import React from 'react';

import { DisplayCanvas } from '../canvas';

import CardContainer from './CardContainer';

const Card = ({ data, style, handleDelete }) => (
  <CardContainer 
    handleClose={handleDelete}
    style={{ minWidth: '400px', ...style }}
  >
    {
      data.drawing && (
        <DisplayCanvas
          width={400}
          height={200}
          drawing={data.drawing}
        />
      )
    }

    <p>{ data.message }</p>

    {
      data.signature && (
        <DisplayCanvas
          width={400}
          height={100}
          drawing={data.signature}
        />
      )
    }

    <p style={{ textAlign: 'end', fontStyle: 'italic' }}>
      { `- ${data.name}` }
    </p>
  </CardContainer>
);

export default Card;
