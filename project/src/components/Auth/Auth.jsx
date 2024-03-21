import "./style.css"
import { useEffect, useState } from 'react'
const regex = /[a-zA-Z0-9]+/;

function Auth(prop){
    const [username,setUserName] = useState("");
    function logIn(){
        if(!username){ alert("Username required"); return}
        if(!regex.test(username)) { alert("Invalid input"); return}
        prop.authFunction({status:true, login:username, icon:createGradient()})
    }

    function logOut(){
        setUserName("");
        prop.authFunction({status:false, login:"", icon:""})
    }

    function handleChange(e){
        setUserName(e.target.value);
    }

    function createGradient() {
        var canvas = document.createElement('canvas');
        canvas.width = 100; // Adjust width as needed
        canvas.height = 100; // Adjust height as needed
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6,"0"));
        gradient.addColorStop(1, '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6,"0"));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toDataURL();
    }

    if(prop.auth.status){
        return (

            <div className="card d-flex flex-column align-items-center">
                <img src={prop.auth.icon} className="card-img-top rounded-circle mt-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prop.auth.login}</h5>
                    <a href="#" onClick={logOut} className="btn btn-primary mt-2">Logout</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card d-flex flex-column align-items-center">
                    <div className="mb-3">
                        <label htmlFor="usernameRegister" className="form-label my-3 fw-bold">Register</label>
                        <input onChange={handleChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        <a href="#" onClick={logIn} className="btn btn-primary mt-3">Login</a>
                    </div>
            </div>
        )
    }



}

export { Auth }