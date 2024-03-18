import "./style.css"
import { useEffect, useState } from 'react'

function Auth(prop){
    const [username,setUserName] = useState("");
    function logIn(){
        prop.authFunction({status:true, login:username, img:createGradient()})
    }

    function logOut(){
        prop.authFunction({status:false})
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
        gradient.addColorStop(0, '#' + Math.floor(Math.random() * 16777215).toString(16));
        gradient.addColorStop(1, '#' + Math.floor(Math.random() * 16777215).toString(16));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toDataURL();
    }

    if(prop.auth.status){
        return (

            <div className="card d-flex flex-column align-items-center">
                <img src={prop.auth.img} className="card-img-top rounded-circle" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prop.auth.login}</h5>
                    <br></br>
                    <a href="#" onClick={logOut} className="btn btn-primary">Logout</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card d-flex flex-column align-items-center">
                    <div class="mb-3">
                        <label htmlFor="usernameRegister" class="form-label mb-3 fw-bold">Register</label>
                        <input onChange={handleChange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        <a href="#" onClick={logIn} className="btn btn-primary mt-3">Login</a>
                    </div>
            </div>
        )
    }



}

export { Auth }