import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData, sendData } from './assets/utils/database'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, set} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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



function App() {
  const [count, setCount] = useState(0);
  const reference = ref(db,"count/"+count);
  const readReference = ref(db,"count/");

  function btnClick(){
    setCount((count) => count + 1);
    // set(reference, {
    //   time: Date.now(),
    //   id: count
    // })
    sendData(count);
  }

  useEffect( ()=> {
    onValue(readReference, (snap)=>{
      const data = snap.val();
      console.log(data);
    })

  },[])
  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btnClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
