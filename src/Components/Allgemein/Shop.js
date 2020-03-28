import React, {useState} from "react";
import "./Shop.css"

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

    return(
        <div className="Shop">
            <h1>Home</h1>
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