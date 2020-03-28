import React, {useState} from "react";
import "./Login.css"
import {Checkbox} from "antd";

function Login(probs) {

    const [loginInfos,setLoginin] = useState({email:"", password: ""});

    const array = [{name:"mehl", anzahl:2}, {name:"zucker", anzahl: 3}, {name:"nutella", anzahl: 5}];

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
//
    const ar = array.map(a=>
        <li key={a.name}>{a.name} anzahl = {a.anzahl}</li>
    );
    const checkboxchanger =(e)=>{
        console.log(`checked = ${e.target.checked}`);
    };

    const home=()=>{
        probs.history.push("/");
    };


    return(
        <div className="Login">
            <h1>Login <div> <button  onClick={home}>home</button> </div></h1>
            <div>
                <input  value={loginInfos.email} placeholder="email" onChange={emailChanger.bind(this)}/>
                <input type="password" placeholder="password" value={loginInfos.password} onChange={passwordChanger.bind(this)}/>
                <button  onClick={sendLoginDaten}>Log in</button>
                <Checkbox onChange={checkboxchanger}>eingeloggt bleiben</Checkbox>
               <ul>{ar}</ul>
            </div>
        </div>
    );
}

export default Login;
