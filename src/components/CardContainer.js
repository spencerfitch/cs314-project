
const CardContainer = ({ style, children }) => (
  <div style={{
    borderRadius: '15px',
    backgroundColor: 'rgba(65, 110, 240, 0.31)',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    padding: '1em',
    margin: '1em 0',
    ...style,
  }}>      
    { children }
  </div>
);

export default CardContainer;
