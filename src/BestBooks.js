import React from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import  Image  from 'react-bootstrap/Image';
import bookImg from './lib.jpeg';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';

const SERVER = process.env.REACT_APP_SERVER;

const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  handleOpenModal = (addedBook) => {
    
    this.setState({ showModal: true});
  };

  handleBookCreate = async (bookinfo) => {
    const response = await axios.post(API_URL, bookinfo); //arguement goes here
    const newBook = response.data;
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

componentDidMount = async () => {
  try{

    const config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books'
    }
    const response = await axios(config);
    this.setState({
      books: response.data
    })
  } catch (error) {
    console.error('Error in BestBooks componentDidMount: ', error);
    this.setState({
      errorMessage: `Status Code: ${error.response.status}: ${error.response.data}`
    })
  }
}
  render() {

    return (
      <>
        <h2 id="title">My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Container>

        {this.state.books.length ? ( // this is saying IF this.state.books exist, if its more than 0 then give me the carousel.
          <Carousel id="carousel">
              {this.state.books.map(book => (
                <Carousel.Item key={book.title} >
              <Image id="carousel-image"
                className="w-100"
                src={bookImg}
                alt={book.title}
                
                />
                <Carousel.Caption id="carousel-text-box">
                <h2 className="carousel-text">{book.title}</h2>
                <p className="carousel-text">{book.description}</p>
                <p className="carousel-text">Status: {book.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
                ))}
          </Carousel>
          ) : ( // if NOT then give me "no books found"
          <h3 id="no-books">No Books Found :(</h3>
          )}
          <Button variant="primary" onClick={() => this.props.handleOpenModal}>
          Add Book
        </Button>
        </Container>
      </>
    )
  }
}

export default BestBooks;
