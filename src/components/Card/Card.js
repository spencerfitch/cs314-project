import React from 'react';

import { StyledButton } from '../inputs';
import { DisplayCanvas } from '../canvas';

import styles from './Card.module.css';
import CardContainer from './CardContainer';

/*
<StyledButton 
onClick={handleDelete}
variant={'light'}
style={{ width: 'fit-content', marginLeft: '.5em' }}
>
Delete
</StyledButton>
*/

const Card = ({ data, style, handleDelete, handleEdit }) => (
  <CardContainer style={{ minWidth: '400px', ...style }} handleClose={handleDelete}>
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
