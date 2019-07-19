import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA6NZQAMj59r8s-xYPMmrDrEVtxiFsKfX8',
  authDomain: 'podzielnia.firebaseapp.com',
  databaseURL: 'https://podzielnia.firebaseio.com',
  projectId: 'podzielnia',
  storageBucket: 'podzielnia.appspot.com',
  messagingSenderId: '753354763970',
  appId: '1:753354763970:web:fc83ae1f309f4f6c',
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
