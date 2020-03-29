import React, {useState} from "react";
import "./Home.css"
import logo from "./../../Bilder/home.png"

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
                <button  onClick={shop}>Shop</button>
                <br/>
                <button  onClick={login}>Login</button>
                <button  onClick={register}>Register</button>
            </div>

        </div>
    );
}




export default Home;
