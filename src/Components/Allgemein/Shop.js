import React, {useState} from "react";
import "./Shop.css"
import logo from "../../Bilder/shop.png";

function Shop(probs) {

    const bread=()=>{

    };
    const flour=()=>{

    };
    const sugar=()=>{

    };
    const water=()=>{

    };
    const corona=()=>{

    };
    const batsoup=()=>{

    };
//

    const home=()=>{
        probs.history.push("/");
    };

    return(
        <div className="Shop">
            <h1><img src={logo} width="150px" height="90px" align="center" alt="Shop"/> <div> <button  onClick={home}>home</button> </div></h1>
            <div>
                <button  onClick={bread}>Bread</button>
                <button  onClick={flour}>Flour</button>
                <button  onClick={sugar}>Sugar</button>
                <button  onClick={water}>Water</button>
                <button  onClick={corona}>Corona</button>
                <button  onClick={batsoup}>Batsoup</button>
            </div>
        </div>
    );
}

export default Shop;