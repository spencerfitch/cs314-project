
import CardContainer from './CardContainer';
import CanvasDraw from "react-canvas-draw";

const Card = ({ data, style }) => (
  <CardContainer style={{ minWidth: '400px', ...style }}>
    <p>{ data.message }</p>
    <CanvasDraw 
      brushRadius={3}
      canvasWidth={400}
      canvasHeight={200}
      hideInterface={true}
      lazyRadius={0}
    />
    {
      data.signature.drawn ? (
        <p>---drawing---</p>
      ) : (
        <p style={{ textAlign: 'end', fontStyle: 'italic', fontSize: '20px' }}>
          { `- ${data.signature.data}` }
        </p>
      )
    }
  </CardContainer>
);

export default Card;