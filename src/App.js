import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import './App.css';

class App extends React.Component {

  unsubscribedFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            });
        
        });
      } else {
        setCurrentUser( userAuth );
      }
    });
    
  }
 
  componentWillUnmount(){
    console.log("componentWillUnmount [ App.js]");
    if(this.unsubscribedFromAuth) {
      this.unsubscribedFromAuth();
      console.log('unmounted and unsubsrcibed')
    }
  }

  render(){
   // const {currentUser} = this.state;
   //{currentUser ? <Redirect to="/" /> : <SignInSignUp />}
    return (
      <div >
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={ () => 
              this.props.currentUser ? (
                <Redirect to= '/' />
              ) : (
                <SignInSignUp />
              ) 
            }
          />
        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser( user ))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
