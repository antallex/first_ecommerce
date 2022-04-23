import "./App.css";
import HomePage from "./pages/home/homepage.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/not-found/not-found-page.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React, { Component } from "react";
import { onSnapshot } from "firebase/firestore";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route
              path="*"
              element={<NotFoundPage currentUser={this.state.currentUser} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
