import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAyloqh7aumIGeRK3xwuBDlzLqwXqf2fEI",
    authDomain: "fir-nectflizz.firebaseapp.com",
    databaseURL: "https://fir-nectflizz.firebaseio.com",
    projectId: "fir-nectflizz",
    storageBucket: "fir-nectflizz.appspot.com",
    messagingSenderId: "1026014135541"
  };
  export default firebase.initializeApp(config);