import { takeLatest, all, call, put } from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from "../../utils/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';
import { shopCollectionsName } from "../../constants";

import ShopActionTypes from './shopActionTypes';

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection(shopCollectionsName);
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}