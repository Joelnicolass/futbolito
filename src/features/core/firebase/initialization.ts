import {initializeApp} from '@firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  setPersistence,
} from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, {type: 'LOCAL'});

// export const analytics = getAnalytics(app);
