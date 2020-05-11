import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAb_MCmAQQZJAauN7G2-hAUSYwn4tRSD8I',
	authDomain: 'crown-db-9467d.firebaseapp.com',
	databaseURL: 'https://crown-db-9467d.firebaseio.com',
	projectId: 'crown-db-9467d',
	storageBucket: 'crown-db-9467d.appspot.com',
	messagingSenderId: '169832412267',
	appId: '1:169832412267:web:806bfa2256c8187ba6ed2e',
	measurementId: 'G-KJV40E62XX',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
