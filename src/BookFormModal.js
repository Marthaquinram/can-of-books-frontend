import React from 'react';
import {Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

class BookFormModal extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value
        };
        this.props.createBook(newBook);
        this.props.closeFormModal();
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeFormModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Book</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Book Title
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Title Here">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Book Description
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Book description">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Book Status
                            </Form.Label>
                            <Form.Control as="select">
                                <option value="Healing yourself">Inspirational</option>
                                <option value="My Personal Favs">Favorites</option>
                                <option value="In your Feels">Emotional</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="mb-4" variant="primary" type="submit">
                            Submit Book!
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeFormModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default BookFormModal;