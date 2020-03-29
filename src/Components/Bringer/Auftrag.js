import React, {useState} from "react";
import {Input} from "antd";
import {Button} from "antd";

function Auftrag() {

    const {Search} = Input;



    return(
        <div className="Auftrag">

            <Search
                placeholder="postcode"
                onSearch={value => console.log(value)}
                style={{width: 400}}
                />


                 <Button type="primary">meine Aufträge</Button>



        </div>



    );
}

export default Auftrag;
