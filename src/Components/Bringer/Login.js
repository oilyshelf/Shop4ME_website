import React, {useState} from "react";
import "./Login.css"
import {Checkbox} from "antd";
import logo from "../../Bilder/login.png";

function Login(probs) {

    const [loginInfos,setLoginin] = useState({email:"", password: ""});



    const emailChanger =(event)=>{
        setLoginin({
            email: event.target.value,
            password: loginInfos.password});
    };
    const passwordChanger =(event)=>{
        setLoginin({
            email: loginInfos.email,
            password: event.target.value
        });
    };
    const sendLoginDaten=()=>{
      console.log(loginInfos.email + " "+ loginInfos.password);
    };



    const checkboxchanger =(e)=>{
        console.log(`checked = ${e.target.checked}`);
    };

    const home=()=>{
        probs.history.push("/");
    };


    return(
        <div className="Login">
            <h1><img src={logo} width="150px" height="90px" align="center" alt="Login"/><div> <button  onClick={home}>home</button> </div></h1>
            <div>
                <input  value={loginInfos.email} placeholder="email" onChange={emailChanger.bind(this)}/>
                <input type="password" placeholder="password" value={loginInfos.password} onChange={passwordChanger.bind(this)}/>
                <button  onClick={sendLoginDaten}>Log in</button>
                <Checkbox onChange={checkboxchanger}>eingeloggt bleiben</Checkbox>

            </div>
        </div>
    );
}

export default Login;
