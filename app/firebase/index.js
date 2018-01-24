import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyCqaSx7ysrU-gXBZcnBJuqq565buYu6bOY",
    authDomain: "react-todo-app-672b1.firebaseapp.com",
    databaseURL: "https://react-todo-app-672b1.firebaseio.com",
    projectId: "react-todo-app-672b1",
    storageBucket: "react-todo-app-672b1.appspot.com",
    messagingSenderId: "116246858917"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
