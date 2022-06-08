import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import bookImg from './lib.jpeg';
import axios from 'axios';
import BookFormModal from './BookFormModal.js';
import { Container, Button} from 'react-bootstrap';

// const SERVER = process.env.REACT_APP_SERVER;

// const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      bookToBeUpdated: null
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

  deleteBook = async (bookToBeDeleted) => {
    try {
      const proceed = window.confirm(`Do you want to delete ${bookToBeDeleted.title}?`);


      let newBookArr = this.state.books.filter((book) => book._id !== bookToBeDeleted._id);
      this.setState({
        books: newBookArr,
        errorMessage: ''
      });

      if (proceed) {
        const config = {
          method: 'DELETE',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/books/${bookToBeDeleted._id}`
        };
        await axios(config);

      }
    } catch (error) {
      console.error('error in BestBook deleteBook: ', error);
      this.setState({
        errorMessage: `Status Code is ${error.response.status}: ${error.response.data}`
      });
    }
  };
updateBook = async (updatedBook) => {
    try {
        const config = {
          method: 'PUT',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/books/${updatedBook._id}`,
          data: updatedBook
        };
        const updatedBookResult = await axios(config);
        
      let updateBooks = this.state.books.map(book => {
        if (book._id === updatedBookResult.data._id) {
          return updatedBookResult;
        } else {
          return book;
        }
      });
      
      this.setState({
        books: updateBooks,
        errorMessage: ''
      });

    } catch (error) {
      console.error('error in BestBook updateBook: ', error);
      this.setState({
        errorMessage: `Status Code is ${error.response.status}: ${error.response.data}`
      });
    }
  };

  closeError = () => this.setState({ errorMessage: '' });

  closeFormModal = () => this.setState({ showModal: false });
  selectBookToUpdate = (bookToBeUpdated) => this.setState({ bookToBeUpdated, showModel: true });

  render() {

    return (
      <>
        <h2 id="title">My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.showModal &&
          <BookFormModal
          showModal={this.state.showModal}
          closeFormModal={this.closeFormModal}
          createBook={this.createBook}
          bookToBeUpdated={this.state.bookToBeUpdated}
          updateBook={this.updateBook} />
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
                    <Button id="delete" onClick={() => { this.deleteBook(book) }}>Delete</Button>
                    <Button onClick={() => { this.selectBookToUpdate(book) }}> Update</Button>
                    <Button variant="primary" onClick={() => this.setState({ showModal: true })}>
                      Add Book
                    </Button>
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
