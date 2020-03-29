import React, {useState} from "react";
import {Button,Table} from "antd";

function meinAuftrag(probs)
{
    const exampleData = [{errand_id:0, postcode:4897},{errand_id:1, postcode:4597},{errand_id:2, postcode:4897}];
    const columns = [{title:"Errnad_Id", dataIndex:"errand_id"}, {title: "Postcode", dataIndex: "postcode"}, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <Button onClick={()=>{
            console.log(record);
            probs.history.push("/Errand/"+record.errand_id);

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

export default meinAuftrag;
