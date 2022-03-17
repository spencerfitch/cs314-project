import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { StyledButton } from '../inputs';

const SendCard = ({ onCancel, onSubmit }) => (
  <Modal show={true} onHide={onCancel}>
    <Modal.Header>
      <Modal.Title>Send Your Card</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient email address</Form.Label>
            <Form.Control type="email" placeholder="Enter recipient's email..." />
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
      <StyledButton variant="secondary" onClick={onCancel}>Cancel</StyledButton>
      <StyledButton variant="primary" onClick={onSubmit}>Send</StyledButton>
    </Modal.Footer>
  </Modal>
);

  export default SendCard;