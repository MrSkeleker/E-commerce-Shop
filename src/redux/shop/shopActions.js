import ShopActionTypes from "./shopActionTypes";
import { convertCollectionsSnapshotToMap, firestore } from "../../utils/firebase.utils";
import { shopCollectionsName } from "../../constants";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.PENDING_COLLECTIONS
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.SUCCESS_COLLECTIONS,
    payload: collectionMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FAILURE_COLLECTIONS,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionsRef = firestore.collection(shopCollectionsName);
    collectionsRef.get()
    .then(collectionSnapShot => {
        const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))
}