import React, {useState} from "react";
import {Input} from "antd";
import {Button,Table} from "antd";
import {useSelector} from "react-redux";
import {command} from "../../Connection/Websocket";

function Auftrag(probs) {

    const {Search} = Input;
    const sessionID = useSelector(state=>state.sessionID);
    const exampleData = useSelector(state=>state.errandList);
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
        <div className="Auftrag">

            <Search
                placeholder="postcode"
                onSearch={value => command(JSON.stringify({action:"getErrands", sessionID: sessionID, postcode: value}),probs.history)}
                style={{width: 400}}
                />


                 <Button type="primary"  onClick={()=>{
                     command(JSON.stringify({action:"getErrands", sessionID: sessionID, postcode: -1}),probs.history);
                     probs.history.push("/myErrands");
                 }}>meine Aufträge</Button>

            <div>
                <Table columns = {columns} dataSource={exampleData}/>
            </div>

        </div>



    );
}

export default Auftrag;
