import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import Welcome from './Welcome';
import Profile from './auth/Profile';
import { withAuth0 } from "@auth0/auth0-react";
// import CreateBook from './CreateBook';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import axios from 'axios';

// const SERVER = process.env.REACT_APP_SERVER;

// const API_URL = `${SERVER}/books`;


class App extends React.Component {

  // handleBookCreate = async (bookinfo) => {
  //   const response = await axios.post(API_URL, bookinfo); //arguement goes here
  //   const newBook = response.data;
  //   this.setState({
  //     books: [...this.state.books, newBook]
  //   })
  // }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"

              element={this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome />}
            >

            </Route>
            <Route
              path="/about"
              element={<About />}
            >
            </Route>
            <Route
              path="/profile"
              element={<Profile />}
            >
            </Route>
            <Route>
              {/* <CreateBook onCreate={this.handleBookCreate} /> */}

            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
