import { Modal } from 'react-bootstrap';
import CanvasDraw from 'react-canvas-draw';
import { useState } from 'react'; 

import { StyledButton } from '.';

const AddNote = ({ show, onClose, onSubmit }) => {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const [addDrawing, setAddDrawing] = useState(false);
  const [drawing, setDrawing] = useState();
  const [addSignature, setAddSignature] = useState(false);
  const [signature, setSignature] = useState();

  const handleSubmit = () => {
    if (!message) {
      alert('Please enter a message for the note.');
      return;
    }

    if (!name) {
      alert('Please enter a name for the note.');
      return;
    }

    onSubmit(message, name, drawing, signature);
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Add a Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form>
        <div className="form-group p-2">
          <label htmlFor="taskName">Add drawing? </label>
          <input
            type={'checkbox'}
            className={'form-check-input'}
            style={{ marginLeft: '.5em' }}
            onChange={(ev) => setAddDrawing(ev.target.checked)}
          />
          {
            addDrawing && (
              <div style={{border: '1px solid rgba(0, 0, 0, .2)', width: 'fit-content', margin: '0 auto'}}>
                <CanvasDraw 
                  brushRadius={3}
                  canvasWidth={400}
                  canvasHeight={200}
                  hideInterface={true}
                  lazyRadius={0}
                  onChange={(ev) => setDrawing(ev.getSaveData())}
                />
              </div> 
            )
          }
        </div>
        
        <div className="form-group p-2">
          <label htmlFor="taskName">Message</label>
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
              <div style={{border: '1px solid rgba(0, 0, 0, .2)', width: 'fit-content', margin: '0 auto'}}>
                <CanvasDraw 
                  brushRadius={3}
                  canvasWidth={400}
                  canvasHeight={100}
                  hideInterface={true}
                  lazyRadius={0}
                  onChange={(ev) => setSignature(ev.getSaveData())}
                />
              </div> 
            )
          }
        </div>
        
        <div className="form-group p-2">
          <label htmlFor="taskName">Name</label>
          <input
            className="form-control"
            placeholder="Enter your name..."
            maxLength={500}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>       
      </form>
        
      </Modal.Body>

      <Modal.Footer>
        <StyledButton onClick={onClose} variant={'btn-secondary'}>
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
