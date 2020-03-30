import React, {useEffect, useState} from "react";

import {Table,Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setItems, setShoopingList} from "../../redux/actions";
import {command} from "../../Connection/Websocket";
import logo from "../../Bilder/shop.png";

function Shop(probs) {
    const dispatch = useDispatch();


    const exampleData = useSelector(state=>state.items);
    const [sList, setSList]= useState({});
    const [tabledata, setTableData] = useState(exampleData.map(a=>{
        a.amount = isNaN(sList[a.item_id]) ? 0:sList[a.item_id];
        return a
    }));

    const updateTable =()=>{
      setTableData(exampleData.map(a=>{
          a.amount = isNaN(sList[a.item_id]) ? 0:sList[a.item_id];
          return a
      }))  ;
    };

    const addToList=(id)=>{
        let temp = sList;

        if (isNaN(temp[id])){
            temp[id]= 1;
        }else{
            temp[id] += 1;
        }

        setSList(temp);
        console.log(sList);
        updateTable()
    };
    const removeToList=(id)=>{
        let temp = sList;

        if (isNaN(temp[id])){

        }else if(temp[id] === 0 || temp[id] === 1 ){
            delete temp[id]
        }else{
                temp[id] -= 1
            }


        setSList(temp);
        console.log(sList);
        updateTable();
    };


    const colums = [{title:"Number",dataIndex:'item_id'},{title: 'Name', dataIndex: 'item_name'},{title:"Amount", dataIndex:"amount"},{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <Button onClick={()=>{
            console.log(record.item_name);
            addToList(record.item_id);
            record.amount = sList[record.item_id];
        }} >add {record.name} to shooping card</Button>
        <Button onClick={()=>{
            removeToList(record.item_id);
        }}>remove 1 from List</Button>
      </span>
        ),
    }];

    const nextOnClick=()=>{
        let itemList = [], x ;
        for (x in sList){
            itemList.push({item_id:x,amount:sList[x]})
        }
        console.log(itemList);
        if(Array.isArray(itemList) && itemList.length){
            dispatch(setShoopingList(itemList));
            dispatch(setItems(exampleData));
            probs.history.push("/bestellung");
        }else{
            alert("no Items selected");
        }

    };


    const home=()=>{
        probs.history.push("/");

    };

    return(
        <div className="Shop">
            <h1><img src={logo} width="180px" height="90px" align="center" alt="Register"/> <div> <Button type="primary" onClick={home}>home</Button> </div></h1>
            <div>
                <Table columns = {colums} dataSource = {tabledata}/>
                <Button type="primary" onClick={nextOnClick}>make errand</Button>
            </div>
        </div>
    );
}

export default Shop;
