import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { StyledButton } from '../inputs';

const AddCollaborator = ({ onCancel, onSubmit }) => (
  <Modal show={true} onHide={onCancel}>
    <Modal.Header>
      <Modal.Title>Add a Collaborator</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Collaborator email address</Form.Label>
          <Form.Control type="email" placeholder="Enter collaborator's email..." />
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
        <StyledButton variant="secondary" onClick={onCancel}>Cancel</StyledButton>
        <StyledButton variant="primary" onClick={onSubmit}>Send</StyledButton>
    </Modal.Footer>
  </Modal>
);

export default AddCollaborator;
