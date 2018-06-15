
import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDHUybkHc15uMHwMg5LXKYafoJ7qJDT-Hw",
  authDomain: "webkartead.firebaseapp.com",
  databaseURL: "https://webkartead.firebaseio.com",
  projectId: "webkartead",
  storageBucket: "webkartead.appspot.com",
  messagingSenderId: "830284173823"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth
}

/*
Optional step, better, for futher modification.
Create another database in firebase to production application
change the const config to look like this.
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

And then create two const (prodConfig and devConfig) objects to hold the 
database, key, ip, infomation from firebase.
That way i'll won't have trouble mixing two types of data.
*/