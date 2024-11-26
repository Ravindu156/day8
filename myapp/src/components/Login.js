import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login(){
    const navigate=useNavigate();
   
    
    
    const authenticate=()=>{
        if(user===username && pass===password){
            navigate('/dash');
        }
        else{
            alert('Invalid Credentials');
        }

    }

    const [user,setUser]=useState({
        username:''
    });  
    const [pass,setPass]=useState({
        password:''
    });

    const username='admin';
    const password='admin';

    return(
        <div>
            <h1>Login Here</h1>
            <p>Username:</p>
            <input type="text" value={setUser} name="usrname" id="usrname"></input>
            <p>Password</p>
            <input type="password" value={setPass} name='pass1' id="pass1"></input>
            <br></br>
            <button onClick={authenticate}>Login</button>
        </div>


    );
}