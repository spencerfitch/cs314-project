import React from 'react';

import { StyledButton } from '../inputs';
import { DisplayCanvas } from '../canvas';

import CardContainer from './CardContainer';

const Card = ({ data, style, handleDelete, handleEdit }) => (
  <CardContainer style={{ minWidth: '400px', ...style }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '.25em'}}>
      {
        false && (
          <StyledButton 
            onClick={handleEdit}
            variant={'btn-light'}
            style={{ width: 'fit-content' }}
          >
            Edit
          </StyledButton>
        )
      }
      <StyledButton 
        onClick={handleDelete}
        variant={'btn-light'}
        style={{ width: 'fit-content', marginLeft: '.5em' }}
      >
        Delete
      </StyledButton>
    </div>
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
