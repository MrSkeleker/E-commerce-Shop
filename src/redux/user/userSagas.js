import { takeLatest, all, call, put } from 'redux-saga/effects';

import {auth, createUserProfileDocument, googleProvider, facebookProvider, getCurrentUser} from '../../utils/firebase.utils';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './userActions';
import UserActionTypes from './userActionTypes';

export function* signInUser(user, additionalData=undefined) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }
    catch(error) {
        yield put(signInFailure(error))
    }
}

export function* googleSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield signInUser(user)
    }
    catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

export function* emailSignIn({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield signInUser(user);
    }
    catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* facebookSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(facebookProvider)
        yield signInUser(user)
    }
    catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onFacebookSignInStart() {
    yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, facebookSignIn)
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    }
    catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield signInUser(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield signInUser(userAuth);
    }
    catch(error) {
        yield put(signInFailure(error.message))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error) {
        yield put(signOutFailure(error.message))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onFacebookSignInStart),
        call(onSignUpStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpSuccess)
    ])
}