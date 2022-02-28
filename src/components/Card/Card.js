
import CardContainer from './CardContainer';
import CanvasDraw from "react-canvas-draw";

const Card = ({ data, style }) => (
  <CardContainer style={{ minWidth: '400px', ...style }}>
    {
      data.drawing && (
        <CanvasDraw 
          brushRadius={3}
          canvasWidth={400}
          canvasHeight={200}
          hideInterface={true}
          lazyRadius={0}
          disabled={true}
          saveData={data.drawing}
          animated={false}
          hideGrid={true}
        />
      )
    }
    <p>{ data.message }</p>
    {
      data.signature && (
        <CanvasDraw 
          brushRadius={3}
          canvasWidth={400}
          canvasHeight={100}
          hideInterface={true}
          lazyRadius={0}
          disabled={true}
          saveData={data.signature}
          hideGrid={true}
        />
      )
    }


    <p style={{ textAlign: 'end', fontStyle: 'italic' }}>
      { `- ${data.name}` }
    </p>
  </CardContainer>
);

export default Card;