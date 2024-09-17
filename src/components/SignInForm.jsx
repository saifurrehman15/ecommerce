import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import AppSignIn from '../pages/SignInPage';

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

 function SignInForm({getLoginVal}) {
    return(
        <Form
        className='mx-auto my-24  signupForm p-3'
        name="basic"

        style={{
            maxWidth: 600,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={getLoginVal}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="User-Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"

        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item

        >
            <Button type="primary" htmlType="submit">
                Sign in
            </Button>
        </Form.Item>
        <Form.Item

        >
            <p>Don't have an Account? <Link to={"/"} style={{ color: "blue", fontWeight: 'bold' }}> Signup</Link></p>
        </Form.Item>

    </Form>
    )
}

export default SignInForm