import React, {useState} from "react";
import {Button} from "antd";

function derAuftrag(probs)
{



    return(
      <div>
          <h1> Auftrag {probs.match.params.id}</h1>
          <Button onClick={()=>{
              probs.history.goBack();
          }} type="primary">zurück</Button>
      </div>
    );
}

export default derAuftrag;
