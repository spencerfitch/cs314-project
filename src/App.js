import React, { useState } from "react";

import styles from './App.module.css';

import { sampleCards } from "./utils";
import { ClickableEdit, StyledButton } from "./components/inputs";
import { AddNote, AddCollaborator, SendCard } from "./components/modals";
import CardView from "./components/CardView";

// App Color Palette: https://coolors.co/palette/5d2a42-fb6376-fcb1a6-ffdccc-fff9ec

const ControlButton = ({ onClick, children }) => (
  <StyledButton
    variant={'outline-primary'}
    style={{fontWeight: '700'}}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

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
    <div className={styles.appContainer}>
      <div>
        <div className={styles.header}>
          <ClickableEdit
            value={headingText}
            setValue={setHeadingText}
          />
        </div>

        <div className={styles.controlRow}>
          <div className={styles.controlContainer}>
            <ControlButton onClick={() => setShowAddCard(true)}>
              Add Note
            </ControlButton>

            <ControlButton onClick={() => setShowAddCollaborator(true)}>
              Add Collaborator
            </ControlButton>

            <ControlButton onClick={() => setShowSendCard(true)}>
              Send Card
            </ControlButton>
          </div>
        </div>

        <CardView
          cards={cards}
          handleDelete={(idx) => window.confirm('Are you sure you want to delete this note?') && deleteCard(idx)}
          className={styles.noteContainer}
        />
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
