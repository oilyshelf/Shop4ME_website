import React, {useState} from "react";
import "./Home.css"
import logo from "./../../Bilder/home.png"
import {Button} from "antd";

function Home(probs) {

    const shop=()=>{
        probs.history.push("/shop");
    };
    const login=()=>{
        probs.history.push("/login");
    };
    const register=()=>{
        probs.history.push("/register");
    };
//

    return(
        <div className="Home">
            <h1> <img src={logo} width="150px" height="90px" align="center" alt="Home"/> </h1>
            <div>
                <Button type="primary"  onClick={shop}>Shop</Button>
                <br/>
                <Button type="primary" onClick={login}>Login</Button>
                <br/>
                <Button type="primary" onClick={register}>Register</Button>
            </div>

        </div>
    );
}




export default Home;
