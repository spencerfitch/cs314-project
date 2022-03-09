import React, { createRef, useState } from 'react'; 
import { Modal } from 'react-bootstrap';

import { StyledButton } from '../inputs';
import { DrawCanvas } from '../canvas';

const AddNote = ({ onSubmit, onCancel }) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const [addDrawing, setAddDrawing] = useState(false);
  const drawRef = createRef(null);
  const [addSignature, setAddSignature] = useState(false);
  const signatureRef = createRef(null);

  const handleSubmit = () => {
    if (!message) {
      alert('Please enter a message for the note.');
      return;
    }

    if (!name) {
      alert('Please enter a name for the note.');
      return;
    }

    onSubmit(message, name, drawRef.current?.getSaveData(), signatureRef.current?.getSaveData());
  }

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header>
        <Modal.Title>Add a Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div>
        <div className="form-group p-2">
          <label htmlFor="taskName">Add drawing? </label>
          <input
            type={'checkbox'}
            className={'form-check-input'}
            style={{ marginLeft: '.5em' }}
            onChange={(ev) => {setAddDrawing(ev.target.checked);} }
          />
          {
            addDrawing && (
              <DrawCanvas
                ref={drawRef}
                width={400}
                height={200}
              />
            )
          }
          
        </div>
        
        <div className="form-group p-2">
          <label htmlFor="taskName">Message <span style={{"color":"red"}}>*</span></label>
          <input
            className="form-control"
            placeholder="Message..."
            maxLength={500}
            onChange={(ev) => setMessage(ev.target.value)}
          />
        </div>

        <div className="form-group p-2">
          <label htmlFor="taskName">Add signature? </label>
          <input
            type={'checkbox'}
            className={'form-check-input'}
            style={{ marginLeft: '.5em' }}
            onChange={(ev) => setAddSignature(ev.target.checked)}
          />
          {
            addSignature && (
              <DrawCanvas
                ref={signatureRef}
                width={400}
                height={100}
              />
            )
          }
        </div>
        
        <div className="form-group p-2">
          <label htmlFor="taskName">Name <span style={{"color":"red"}}>*</span></label>
          <input
            className="form-control"
            placeholder="Enter your name..."
            maxLength={500}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>      
        <div> 
          <p><span style={{"color":"red"}}>*</span> Required field</p>
        </div>
      </div>
        
      </Modal.Body>

      <Modal.Footer>
        <StyledButton onClick={onCancel} variant={'btn-secondary'}>
          Close
        </StyledButton>
        <StyledButton onClick={handleSubmit} variant={'btn-primary'}>
          Add
        </StyledButton>
      </Modal.Footer>
    </Modal>
  );
}

export default AddNote;
