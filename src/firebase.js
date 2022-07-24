const firebaseConfig = {
  apiKey: "AIzaSyBtM7DrZYDOg3LryCXUI2Gwu8E-blehb58",
  authDomain: "disneyplus-clone-765f3.firebaseapp.com",
  projectId: "disneyplus-clone-765f3",
  storageBucket: "disneyplus-clone-765f3.appspot.com",
  messagingSenderId: "32946795571",
  appId: "1:32946795571:web:5161c83bd4c0d1c6a21f46",
  measurementId: "G-BBJ6LE1PRT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;