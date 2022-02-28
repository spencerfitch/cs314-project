import { useState } from "react";

import {
  ClickableEdit,
  Card,
  StyledButton,
  AddNote,
  SendCard,
} from "./components";
import { sampleCards } from "./utils";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [headingText, setHeadingText] = useState('Happy Birthday Tom');
  const [cards, setCards] = useState(sampleCards);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showSendCard, setShowSendCard] = useState(false);

  const addCard = (card) => setCards([...cards, card]);

  const handleAddCard = (message, name, drawing, signature) => {
    const card = {
      message, name, drawing, signature
    };

    console.log(card);

    addCard(card);
    setShowAddCard(false);
  }

  const cardGroups = [[], [], []];

  cards.forEach((card, idx) => {
    cardGroups[idx%3].push(card);
  });

  return (
    <div style={{ minHeight: '100vh'}}>
      {
        (false) && (
          <header style={{ backgroundColor: 'lightgray' }}>
          <h2 style={{ margin: '0', textAlign: 'end', paddingRight: '1em' }}>
            
          </h2>
          </header>
        )
      }
      

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
          
          <div 
            style={{
              position: 'absolute',
              right: '3em',
              marginTop: '3em',
              
            }}
          >
            <StyledButton
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                zIndex: '2',
                fontSize: 'large',
              }}
              variant={'btn-primary'}
              onClick={() => setShowAddCard(true)}
            >
              Add a Note
            </StyledButton>

            <StyledButton
              style={{
                marginLeft: '1em',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                zIndex: '2',
                fontSize: 'large',
              }}
              variant={'btn-primary'}
              onClick={() => setShowSendCard(true)}
            >
              Send Card
            </StyledButton>
          </div>
          
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
      
      <AddNote
        show={showAddCard}
        onSubmit={handleAddCard}
        onClose={() => setShowAddCard(false)}
      />

      <SendCard
        show={showSendCard}
        handleSend={() => {
          alert('Email Sent')
          setShowSendCard(false)
        }}
        handleCancel={() => setShowSendCard(false)}
      />
      
    </div>
  );
}

export default App;
