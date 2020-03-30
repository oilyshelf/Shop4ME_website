import React, {useState} from "react";
import {Button} from "antd";
import {useSelector} from "react-redux";
import {command} from "../../Connection/Websocket";

function DerAuftrag(probs)
{

        const info = useSelector(state=>state.errand);
        const sessionID = useSelector(state=>state.sessionID);
        const data = info.itemList;
        const useData = data.map(a=>(
            <li key={a.item_id}>{a.item_id}: {a.item_name} amount: {a.amount} </li>
        ));

    return(
      <div>
          <h1> Auftrag {info.errand_id}</h1>
          <p> startDate : {info.startDate}</p>
          <p> postcode : {info.postcode}</p>
          <p> email : {info.email}</p>
          <p> phonenumber : {info.phone_number}</p>
          <p> notice : {info.notice}</p>
            <ul>{useData}</ul>

          <Button onClick={()=>{
              probs.history.goBack();
          }} type="primary">back</Button>
          <Button hidden={info.status ===1} onClick={()=>{command(JSON.stringify({action:"takeErrand", sessionID:sessionID, errandID:info.errand_id}),probs.history)}}>take Errand</Button>
      </div>
    );
}

export default DerAuftrag;
