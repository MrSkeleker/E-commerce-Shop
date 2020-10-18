import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATzy0Nk-BV2x6BIvGmH2HT8GkIbN5onNU",
    authDomain: "crownshoppractice-db.firebaseapp.com",
    databaseURL: "https://crownshoppractice-db.firebaseio.com",
    projectId: "crownshoppractice-db",
    storageBucket: "crownshoppractice-db.appspot.com",
    messagingSenderId: "527404522061",
    appId: "1:527404522061:web:ca90276c326ca1d2371a04",
    measurementId: "G-F33VCE9FN9"
};

export const createUserProfileDocument = async (userAuth, additionalData = null) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapShot = await userRef.get();
    if (!userSnapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.error('Error creating user', error.message)
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, items) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    items.forEach(item => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, item);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (snapshot) => {
    const collections =  snapshot.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,
        }
    })

    return collections.reduce((collectionMap, collection) => {
        collectionMap[collection.title.toLowerCase()] = collection;
        return collectionMap;
    }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
const facebookProvider = new firebase.auth.FacebookAuthProvider();
firebase.auth().useDeviceLanguage();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;