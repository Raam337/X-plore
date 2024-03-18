import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData, sendData } from './assets/utils/database'
import { Input } from './components/Input/Input'
import { Auth } from './components/Auth/Auth'


function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [auth,setAuth] = useState({status:false, login:"Robert", img:"https://placehold.co/50x50"});

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
      <div className="container-fluid text-center">
        <div className="row mt-5">
          <div className="col-3 d-flex flex-wrap justify-content-center align-content-between">
            <Auth auth={auth} authFunction={setAuth}></Auth>
          </div>
          <div className="col">
            <Input status={auth.status}></Input>
          </div>
          <div className="col-3">
            Column
          </div>
        </div>
      </div>
    </>
  )
}

export default App
