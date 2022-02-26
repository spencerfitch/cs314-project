import { useState } from "react";

import { ClickableEdit, Card, StyledButton } from "./components";
import { sampleCards } from "./utils";

import './App.css';

/*
  card = {
    message?: 'happy birthday jim',
    drawing?: 'oajefaijefjoajwef',
    signature?: {drawn: bool, data:'drawing or text'}
  }
*/

const App = () => {
  const [headingText, setHeadingText] = useState('Happy Birthday (recipient)');
  const [cards, setCards] = useState(sampleCards);

  const addCard = (card) => setCards([card, ...cards]);

  const cardGroups = [[], [], []];

  cards.forEach((card, idx) => {
    cardGroups[idx%3].push(card);
  });

  return (
    <div style={{ minHeight: '100vh'}}>
      <header style={{ backgroundColor: 'lightgray' }}>
        <h2 style={{ margin: '0', textAlign: 'end', paddingRight: '1em' }}>
          Happ-E-Birthday Card
        </h2>
      </header>

      <div>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'lightcoral',
            alignItems: 'center',
            height: '4em',
            justifyContent: 'center'
          }}
        >
          <ClickableEdit
            value={headingText}
            setValue={setHeadingText}
          />
          
          <StyledButton
            style={{
              position: 'absolute',
              right: '3em',
              marginTop: '3em',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              display: 'block',
              zIndex: '2',
              fontSize: 'large',
            }}
          >
            Add a card
          </StyledButton>
        </div>

        <div 
          style={{ 
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            padding: '1em',
          }}
        >
          {
            cards.map((card, idx) => (
              <Card data={card} key={idx}/>
            ))
          }
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
