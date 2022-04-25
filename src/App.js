import './App.css';
import HomePage from './pages/home/homepage.component';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import NotFoundPage from './pages/not-found/not-found-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React, { Component } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout-page.component';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />

            {/* 
            <Route
              exact
              path='/sign-in'
              render={() =>
                this.state.currentUser ? <Navigate to='/' /> : <SignInPage />
              }

              //error / bug details at the end of the file

            /> */}

            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />

            <Route exact path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//ERROR that signInPage is empty.
// course number 121
