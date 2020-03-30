import React, {useState} from "react";
import {Button,Table} from "antd";
import {useSelector} from "react-redux";
import {command} from "../../Connection/Websocket";

function MeinAuftrag(probs)
{
    const exampleData = useSelector(state=>state.errandList);
    const sessionID = useSelector(state=>state.sessionID);
    const columns = [{title:"Errnad_Id", dataIndex:"errand_id"}, {title: "Postcode", dataIndex: "postcode"}, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <Button onClick={()=>{
            console.log(record);

            command(JSON.stringify({action:"getErrand", sessionID: sessionID, errandID: record.errand_id}),probs.history);
            //probs.history.push("/Errand/"+record.errand_id);

        }} >View Details</Button>

      </span>
        ),
    }];


    return(
        <div>
            <h1>Your Errands</h1>

            <Button onClick={()=>{
                probs.history.goBack()
            }} type="primary">zurück</Button>
            <div>
                <Table columns = {columns} dataSource={exampleData}/>
            </div>

        </div>
    );
}

export default MeinAuftrag;
