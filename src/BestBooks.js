import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import bookImg from './lib.jpeg';
import axios from 'axios';
import BookFormModal from './BookFormModal.js';
import { Container, Button, Accordion } from 'react-bootstrap';

const SERVER = process.env.REACT_APP_SERVER;

const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
  }

  // handleBookCreate = async (bookinfo) => {
  //   const response = await axios.post(API_URL, bookinfo); 
  //   const newBook = response.data;
  //   this.setState({
  //     books: 
  //   })
  // }

  componentDidMount = async () => {
    try {

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

  createBook = async (newBook) => {
    try {
      const config = {
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/books/",
        data: newBook
      };

      const response = await axios(config);

      const newBookArr = [...this.state.books, response.data];
      this.setState({
        books: newBookArr,
        errorMessage: ''
      });

    } catch (error) {
      console.error("error in BestBook createBook: ", error);
      this.setState({
        errorMessage: `Status Code is ${error.response.status}: ${error.response.data}`,
      });
    }
  };

  closeError = () => this.setState({ errorMessage: '' });

  closeFormModal = () => this.setState({ showModal: false });

  render() {

    return (
      <>
        <h2 id="title">My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
          Add Book
        </Button>
        {this.state.showModal &&
          <BookFormModal
            showModal={this.state.showModal}
            closeFormModal={this.closeFormModal} 
            createBook={this.createBook}/>
        }
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
        </Container>
      </>
    )
  }
}

export default BestBooks;
