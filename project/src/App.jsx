import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData, sendData } from './assets/utils/database'
import { Input } from './components/Input/Input'


function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [auth,setAuth] = useState(false);

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
      <Input></Input>
      {/* {Object.entries(posts).map( ([key,val])=> (
      <div key={key}>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{val.place}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{val.postText}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <img src={val.imgData}/>
        </div>
        </div>
      </div> 
      )
      redux?
      const isAuth

      <Login prop=setState>
      <Inpunt prop=state>

      )} */}
    </>
  )
}

export default App
