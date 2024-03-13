import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, set,push} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyAJi_8no94o56-oYUjrJsPOJaJCwdLuRoc",
  authDomain: "data-e3c03.firebaseapp.com",
  databaseURL: "https://data-e3c03-default-rtdb.firebaseio.com",
  projectId: "data-e3c03",
  storageBucket: "data-e3c03.appspot.com",
  messagingSenderId: "173696103865",
  appId: "1:173696103865:web:8e8babfd5b77240ab8b268"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const referenceWrite = ref(db,"count/");

const referenceRead = ref(db, "count/");

function sendData(count) {
  const newref = push(referenceWrite);
    set(newref, {
        time: Date.now(),
        id: count
    })
}

function getData(){
  onValue(readReference, (snap)=>{
    const data = snap.val();
    console.log(data);
  })
}

export {sendData, getData}