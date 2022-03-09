import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddCollaborator = ({ onCancel, onSubmit }) => (
  <Modal show={true} onHide={onCancel}>
    <Modal.Header>
      <Modal.Title>Add a collaborator to your card via email</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter recipient email" />
        </Form.Group>
      </Form>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={onSubmit}>Send</Button>
    </Modal.Footer>
  </Modal>
);

export default AddCollaborator;
