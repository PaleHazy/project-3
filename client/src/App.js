import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component'
import { selectCurrentUser} from './redux/user/user.selectors'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log("props", this.props);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log("firebase snapshot", snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      }
      console.log("userAuth", userAuth);
      setCurrentUser(userAuth);
    }); 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const giveStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => {
  console.log('dispatch',dispatch)
  return {
    setCurrentUser: user => {
      console.log('user', user)
      return (dispatch(setCurrentUser(user)))}
  };
};
export default connect(giveStateToProps, mapDispatchToProps)(App);