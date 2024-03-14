import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, set,push} from "firebase/database"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "data-e3c03.firebaseapp.com",
  databaseURL: "https://data-e3c03-default-rtdb.firebaseio.com",
  projectId: "data-e3c03",
  storageBucket: "data-e3c03.appspot.com",
  messagingSenderId: "173696103865",
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db,"count/");

function sendData(content, img, place, name, ) {
  const newref = push(reference);
    set(newref, {
        time: Date.now(),
        text: str
    })
}

function getData(callback) {
  onValue(reference, (snap) => {
    const data = snap.val();
    callback(data); // Pass data to the callback function
  });
}

// Use following to get the data:
// getData((data) => {
//   console.log(data);
// });


export {sendData, getData}