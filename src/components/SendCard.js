import { Modal, Button, Form } from 'react-bootstrap';

const SendCard = ({ show, handleCancel, handleSend }) => {

    return (

    <Modal show={show} onHide={handleCancel}>
        <Modal.Header>
            <Modal.Title>Send Your Card Via Email</Modal.Title>
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
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            <Button variant="primary" onClick={handleSend}>Send</Button>
        </Modal.Footer>
    </Modal>
    )
  }

  export default SendCard;