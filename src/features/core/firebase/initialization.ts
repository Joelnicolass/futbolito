import {initializeApp} from '@firebase/app';
import {getAuth, setPersistence} from '@firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxWCMBXErjN1jb07gYRx66YLxuDtFmSmQ',
  authDomain: 'futbolito-a8dea.firebaseapp.com',
  projectId: 'futbolito-a8dea',
  storageBucket: 'futbolito-a8dea.appspot.com',
  messagingSenderId: '934319530358',
  appId: '1:934319530358:web:f7c2870055dbb74d085a57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, {type: 'LOCAL'});


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

// Initialize Firebase


// Initialize Cloud Firestore and get a reference to the service

// export const analytics = getAnalytics(app);
