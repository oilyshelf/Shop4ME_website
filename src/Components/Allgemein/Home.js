import React, {useState} from "react";
import "./Home.css"

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
            <h1>Home</h1>
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
