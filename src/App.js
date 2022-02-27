import './App.css';
import HomePage from './pages/home/homepage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/not-found/not-found-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth } from './firebase/firebase.utils';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='sign-in' element={<SignInPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
