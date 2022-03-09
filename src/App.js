import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { sampleCards } from "./utils";

import { ClickableEdit, StyledButton } from "./components/inputs";
import { AddNote, AddCollaborator, SendCard } from "./components/modals";
import Card from './components/Card';

const App = () => {
  const [headingText, setHeadingText] = useState('Happy Birthday Tom');
  const [cards, setCards] = useState(sampleCards);
  const [showAddCard, setShowAddCard] = useState(false);
  const [showSendCard, setShowSendCard] = useState(false);
  const [showAddCollaborator, setShowAddCollaborator] = useState(false);

  const addCard = (card) => setCards([...cards, card]);

  const deleteCard = (idx) => setCards([...cards.slice(0, idx), ...cards.slice(idx+1)]);

  const handleAddCard = (message, name, drawing, signature) => {
    addCard({ message, name, drawing, signature });
    setShowAddCard(false);
  }

  return (
    <div style={{ minHeight: '100vh'}}>
      <div>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'lightcoral',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '.25em',
          }}
        >
          <ClickableEdit
            value={headingText}
            setValue={setHeadingText}
          />
          
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              backgroundColor: 'lightblue',
              padding: '.25em 1em',
              width: '100%',
              alignItems: 'right',
            }}
          >
            <StyledButton
              style={{
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
                fontSize: 'large',
              }}
              variant={'btn-primary'}
              onClick={() => setShowAddCollaborator(true)}
            >
              Add Collaborator
            </StyledButton>

            <StyledButton
              style={{
                marginLeft: '1em',
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
              <Card 
                key={idx} 
                data={card}
                handleDelete={() => window.confirm('Are you sure you want to delete this card?') && deleteCard(idx)}
              />
            ))
          }
        </div>
      </div>
      
      {
        showAddCard && (
          <AddNote
            onSubmit={handleAddCard}
            onCancel={() => setShowAddCard(false)}
          />
        )
      }

      {
        showSendCard && (
          <SendCard
            onSubmit={() => {
              alert('Email Sent');
              setShowSendCard(false);
            }}
            onCancel={() => setShowSendCard(false)}
          />
        )
      }
      
      {
        showAddCollaborator && (
        <AddCollaborator
          onSubmit={() => {
            alert('Email Sent');
            setShowAddCollaborator(false);
          }}
          onCancel={() => setShowAddCollaborator(false)}
        />
        )
      }
      
    </div>
  );
}

export default App;
