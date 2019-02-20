import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyDsrgJUBg3a1p9Oclr7ch_w_3fIrIIyEjA",
  authDomain: "thenightswatch-e012e.firebaseapp.com",
  databaseURL: "https://thenightswatch-e012e.firebaseio.com",
  projectId: "thenightswatch-e012e",
  storageBucket: "thenightswatch-e012e.appspot.com",
  messagingSenderId: "1050091573006"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 