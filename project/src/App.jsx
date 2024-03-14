import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData, sendData } from './assets/utils/database'



function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  function btnClick() {
    setCount((count) => count + 1);
    sendData(count);
  }

  useEffect(() => {
    getData((data) => {
      console.log(data);
      setPosts(data);
    });

  }, [])


  return (
    <>
      {Object.entries(posts).map( ([key,val])=> (
      <div key={key}>
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{val.text}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{key}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div>
      </div> 
      )
      
      )}
    </>
  )
}

export default App
