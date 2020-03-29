import React, {useEffect, useState} from "react";

import {Table,Button} from "antd";
import {useDispatch} from "react-redux";
import {setItems, setShoopingList} from "../../redux/actions";

function Shop(probs) {
    const dispatch = useDispatch();

    const exampleData = [{id:0,name:"bread"},{id:1,name:"flour"},{id:2,name:"sugar"},{id:3,name:"water"},{id:4,name:"apple"},{id:5,name:"toilettpaper"},];
    const [sList, setSList]= useState({});
    const [tabledata, setTableData] = useState(exampleData.map(a=>{
        a.amount = isNaN(sList[a.id]) ? 0:sList[a.id];
        return a
    }));

    const updateTable =()=>{
      setTableData(exampleData.map(a=>{
          a.amount = isNaN(sList[a.id]) ? 0:sList[a.id];
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


    const colums = [{title:"Number",dataIndex:'id'},{title: 'Name', dataIndex: 'name'},{title:"Amount", dataIndex:"amount"},{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <Button onClick={()=>{
            console.log(record.name);
            addToList(record.id);
            record.amount = sList[record.id];
        }} >add {record.name} to shooping card</Button>
        <Button onClick={()=>{
            removeToList(record.id);
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
            <h1>Shop <div> <Button type="primary" onClick={home}>home</Button> </div></h1>
            <div>
                <Table columns = {colums} dataSource = {tabledata}/>
                <Button type="primary" onClick={nextOnClick}>make Errand</Button>
            </div>
        </div>
    );
}

export default Shop;
