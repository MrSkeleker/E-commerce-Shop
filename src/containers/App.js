import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import HomePage from './pages/Homepage/Homepage';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import { loadingMessage } from '../constants';
import { auth, createUserProfileDocument } from '../utils/firebase.utils';
import { setCurrentUser } from '../redux/user/userActions';

const ShopPage = lazy(() => import('./pages/Shop/Shop'));
const AuthenticationPage = lazy(() => import('./pages/Authentication/Authentication'));

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }

      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        const user = { id: snapShot.id, ...snapShot.data() }
        setCurrentUser(user);
      });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Suspense fallback={<Loading message={loadingMessage} />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() =>
              this.props.currentUser
              ? <Redirect to='/'/>
              : <AuthenticationPage />
            } />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
