import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';

import HomePage from './pages/Homepage/Homepage';
import Loading from '../components/Loading/Loading';
import Header from '../components/Header/Header';
import { loadingMessage } from '../constants';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { checkUserSession } from '../redux/user/userActions';

const ShopPage = lazy(() => import('./pages/Shop/Shop'));
const AuthenticationPage = lazy(() => import('./pages/Authentication/Authentication'));
const CheckOutPage = lazy(() => import('./pages/CheckOut/CheckOut'));
const ContactPage = lazy(() => import('./pages/Contact/Contact'));

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       const user = { id: snapShot.id, ...snapShot.data() }
    //       setCurrentUser(user);
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // }, error => console.log(error));
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
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route exact path='/signin' render={() =>
              this.props.currentUser
                ? <Redirect to='/' />
                : <AuthenticationPage />
            } />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
