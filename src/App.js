import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state.currentUser);
        });
      } else {
        this.setState({ currentUser: userAuth });
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
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
