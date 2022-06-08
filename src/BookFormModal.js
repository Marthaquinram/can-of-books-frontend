import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.bookToBeUpdated?._id || null,
      title: this.props.bookToBeUpdated?.title || "",
      description: this.props.bookToBeUpdated?.description || "",
      status: this.props.bookToBeUpdated?.status || "In your Feels",
      method: this.props.bookToBeUpdated ? "PUT" : "POST",
      forTitle: this.props.bookToBeUpdated
        ? "Update My Fav Book"
        : "Add Book to my Favs",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const book = {
      _id: this.props.bookToBeUpdated?._id || null,
      title: this.state.title,
      description: this.state.description,
      status: this.state.status
    };

    if (this.status.method === 'PUT') {
      this.props.updateBook(book);
    } else {
      this.props.createBook(book); 
    }
    this.props.closeFormModal();
  };



  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.forTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book Title Here"
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
                defaultValue={this.state.title}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book description"
                onChange={(event) =>
                this.setState({ description: event.target.value })
                }
                defaultValue={this.state.description}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Book Status</Form.Label>
              <Form.Control 
                as="select"
                onChange={(event) => this.setState({ status: event.target.value })}
                defaultValue={this.state.status}>
                
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
