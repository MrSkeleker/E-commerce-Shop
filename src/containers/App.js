import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/Homepage/Homepage';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import { loadingMessage } from '../constants';
import { auth, createUserProfileDocument } from '../utils/firebase.utils';

const ShopPage = lazy(() => import('./pages/Shop/Shop'));
const AuthenticationPage = lazy(() => import('./pages/Authentication/Authentication'));

class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state ={
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(!userAuth) {
        this.setState({currentUser: userAuth});
        return;
      }
      
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        const user = {id: snapShot.id, ...snapShot.data()}
        this.setState({currentUser: user});
      });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Suspense fallback={<Loading message={loadingMessage} />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/signin' component={AuthenticationPage} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

export default App;
