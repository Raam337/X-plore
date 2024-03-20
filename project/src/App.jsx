
import React, { useEffect, useState } from 'react';
import './App.css';
import { getData, sendData } from './assets/utils/database';
import { Input } from './components/Input/Input';
import { Auth } from './components/Auth/Auth';
import { Post } from './components/Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState({ status: false, login: 'Robert', img: 'https://placehold.co/50x50' });

  useEffect(() => {
    getData((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);


  const handlePostSubmit = (postContent) => {
    const newPost = {
      content: postContent,
      author: auth.login,
      date: new Date().toISOString(),
    };

    sendData(newPost)
      .then(() => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
      })
      .catch((error) => {
        console.error('Error sending post data:', error);
      });
  };

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row mt-5">
          <div className="col-3 d-flex flex-wrap justify-content-center align-content-between">
            <Auth auth={auth} authFunction={setAuth} />
          </div>
          <div className="col">
            <Input status={auth.status} onPostSubmit={handlePostSubmit} />
          </div>
          <div className="col-3">Column</div>
        </div>
      </div>
      <div className='col'>
        <Post posts={posts} />
      </div>
    </>
  );
}

export default App;
