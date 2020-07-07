import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBIsi8f5-w-e9I8qxuAVBiEGzfWngYD1k4",
  authDomain: "blog-comments-230d8.firebaseapp.com",
  databaseURL: "https://blog-comments-230d8.firebaseio.com",
  projectId: "blog-comments-230d8",
  storageBucket: "blog-comments-230d8.appspot.com",
  messagingSenderId: "812923594670",
  appId: "1:812923594670:web:31f56c91b69600b1268a3f",
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase