import { InlintStyleType, RegisterDataType } from '@/shims'
// import Button from '@/component/button/Button'
import { useState } from 'react'
import { registerUser } from '@/api/register'
import { RegisterItemList } from '@/data/CommonData'
import { Form, Input, Button } from 'antd'


// 非空验证
const rulesNotNull = (name:string) => {
  return { required: true, message: '请输入' + name }
}

const FromStyle:InlintStyleType = {
  width: '450px',
  height: '400px',
  position: 'absolute',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  margin: 'auto'
}

const registerClick = function(value:RegisterDataType) {
  registerUser(value).then(resp => {
    if (Number.parseInt(resp.data.status) === 1) {
      alert('注册成功, 点击确定返回进入登录页面')
      location.href = '/login'
    } else {
      alert(resp.data.data)
    }
    console.log(resp)
  })
}


function Register() {
  const onFinish = (values: RegisterDataType) => {
    registerClick(values)
  }

  return (
    <div style={FromStyle}>
      <h3 style={{textAlign: 'center', marginBottom: '30px'}}>欢迎来到自由者论坛</h3>
      <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
      >
        {RegisterItemList.map((val, index) => 
            (<Form.Item key={index.toString()} 
                label={val.label} name={val.name} 
                validateTrigger="onBlur"
                rules={[rulesNotNull(val.label)]}>
              <Input type={val.type}></Input>
            </Form.Item>))}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" style={{marginRight: '20px'}} htmlType="submit" >注册</Button>
          <Button onClick={() => location.href = '/login'}>登录</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register