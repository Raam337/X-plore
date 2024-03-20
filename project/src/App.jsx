import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getData, sendData } from './assets/utils/database'
import { Input } from './components/Input/Input'
import { Auth } from './components/Auth/Auth'
import { Post } from "./components/Post/Post"
import PostList from './components/PostList/PostList'


function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [auth,setAuth] = useState({status:false, login:"", icon:""});

  useEffect(() => {
    getData((data) => {
      console.log(Object.values(data));
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
            <Input authData={auth}></Input>
            <PostList />
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
