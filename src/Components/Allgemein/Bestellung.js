import React, {useState} from "react";
import { Form, Input, InputNumber, Button,List } from 'antd';
import {useSelector} from "react-redux";
import {command} from "../../Connection/Websocket";


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
        <li key={a.item_id}>{a.item_id} - {info[(a.item_id)-1].item_name} Amount:  {a.amount}</li>
    ));

    const onFinish = values => {

        let message = {action: "makeErrand", postcode: values.user.postcode, email: values.user.email,phone_number: values.user.phone_number,
        notice: values.user.notice, items: shopList};
        command(JSON.stringify(message),probs.history)
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
                    name={['user', 'phone_number']}
                    label="Phonenumber"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'postcode']}
                    label="PLZ"
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'notice']} label="Notes">
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
