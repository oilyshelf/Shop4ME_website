import React, {useState} from "react";
import "./Login.css"
import {Checkbox} from "antd";
import logo from "../../Bilder/login.png";
import {Button} from "antd";
import {Input} from "antd";
import {command} from "../../Connection/Websocket";
import {login} from "../../redux/actions";

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
      command(JSON.stringify({action:"login", email: loginInfos.email, password: loginInfos.password}),probs.history)
    };



    const checkboxchanger =(e)=>{
        console.log(`checked = ${e.target.checked}`);
    };

    const home=()=>{
        probs.history.push("/");
    };


    return(
        <div className="Login">
            <h1><img src={logo} width="150px" height="90px" align="center" alt="Login"/><div> <Button type="primary" onClick={home}>home</Button> </div></h1>
            <div>
                <Input  value={loginInfos.email} placeholder="email" onChange={emailChanger.bind(this)}/>
                <Input type="password" placeholder="password" value={loginInfos.password} onChange={passwordChanger.bind(this)}/>
                <Checkbox onChange={checkboxchanger}>eingeloggt bleiben</Checkbox>
                <Button type="primary" onClick={sendLoginDaten}>Log in</Button>


            </div>
        </div>
    );
}

export default Login;
