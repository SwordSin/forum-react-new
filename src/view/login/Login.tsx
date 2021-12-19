import { Form, Input, Button, Checkbox } from 'antd'
import { InlintStyleType } from '@/shims'
import { login } from '@/api/register'
import { useState } from 'react'


const FromStyle:InlintStyleType = {
  width: '400px',
  height: '400px',
  position: 'absolute',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  margin: 'auto'
}
interface FormDataType {
  username: string;
  password: string;
  rememberMe: boolean
}



const Login = () => {
  const onFinish = (values: FormDataType) => {
    if (values.rememberMe === undefined) {
      values.rememberMe = false
    }
    login(values).then(resp => {
      if(resp.data.status === 1) {
        location.href = '/'
      } else {
        alert("发生登录错误")
      }
    })
  }


  return (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        style={FromStyle}
    >
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        欢迎来到自由者论坛
      </div>
      <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>记住登录</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{marginRight: '20px'}}>
          登录
        </Button>
        <Button onClick={() => {console.log('进入首页')}}>
          进入首页
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login