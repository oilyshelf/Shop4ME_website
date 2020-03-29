import React, {useState} from "react";
import { Form, Input, InputNumber, Button } from 'antd';


function Bestellung(probs) {

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 16,
        },
    };


    const Demo = () => {
        const onFinish = values => {
            console.log(values);
        };

        return (
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
                        Bestellung aufgeben
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    return(
        <Demo/>
    );


}

export default Bestellung;