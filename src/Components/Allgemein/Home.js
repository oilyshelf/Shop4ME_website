import React, {useState} from "react";
import "./Home.css"

function Home() {

    const shop=()=>{
        //window.open("/shop");
    };
    const login=()=>{
        window.open("/login");
    };
    const register=()=>{
        window.open("/register");
    };
//

    return(
        <div className="Login">
            <h1>Home</h1>
            <div>
                <button  onClick={shop}>Shop</button>
                <button  onClick={login}>Login</button>
                <button  onClick={register}>Register</button>
            </div>
        </div>
    );
}



export default Home;
