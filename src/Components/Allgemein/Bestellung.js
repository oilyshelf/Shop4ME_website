import React, {useState} from "react";
import { Form, Input, InputNumber, Button,List } from 'antd';
import {useSelector} from "react-redux";


function Bestellung(probs) {

    const [vis, setVis] = useState(true);
    const info = useSelector(state => state.items);
    const shopList = useSelector(state=>state.shopingList);

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const data = shopList.map(a=>(
        <li key={a.item_id}>{a.item_id} - {info[a.item_id].name} Amount:  {a.amount}</li>
    ));

    const onFinish = values => {
        console.log(values);
        };

        return (
            <div>
                <div>
                    <Button onClick={()=>{
                        setVis(!vis);
                    }}> show Your Card</Button>
                    <div hidden={vis}>
                        <ul>{data}</ul>
                    </div>

                </div>


            <Form {...layout} name="nest-messages" onFinish={onFinish} >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Phonenumber"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="PLZ"
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Notes">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        place Order
                    </Button>
                </Form.Item>
            </Form>
                <Button onClick={()=>{
                    probs.history.goBack();
                }}>back</Button>
            </div>
        );


}

export default Bestellung;
