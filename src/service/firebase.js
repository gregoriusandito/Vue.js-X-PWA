import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDw1_w-OpPcd3_W6VntEWB9TC5-aEkJVPw',
  authDomain: 'cropchat-7e18e.firebaseapp.com',
  databaseURL: 'https://cropchat-7e18e.firebaseio.com',
  projectId: 'cropchat-7e18e',
  storageBucket: 'cropchat-7e18e.appspot.com',
  messagingSenderId: '520237549634'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
