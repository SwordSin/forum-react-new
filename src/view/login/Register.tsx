import { InlintStyleType, InputCallBackType, RegisterDataType } from '@/shims'
import Input from '@/component/input/InputLogin'
import Button from '@/component/button/Button'
import { useState } from 'react'
import { registerUser } from '@/api/register'
import { RegisterItemList, RegisterDatas } from '@/data/CommonData'
import { useHistory } from 'react-router-dom'

interface RegisterItemPropsType {
  label: string;
  name: string;
  type: string;
  callback: InputCallBackType;
}

// 整体元素居中
const divStyle:InlintStyleType = {
  paddingLeft: '35%',
  marginTop: '5%'
}
const titleStyle:InlintStyleType = {
  marginBottom: '50px',
  position: 'relative',
  left: '-60px'
}

// 注册元素
const RegisterItem = function(props:RegisterItemPropsType) {
  return (
    <div style={{display: 'flex', width: '300px', marginBottom: '5px'}}>
      <div style={{flex: '2'}}>
        {props.label}
      </div>
      <Input style={{flex: '5'}} type={props.type} name={props.name} callback={props.callback}></Input>
    </div>
  )
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
  const [registerItemValue, setRegisterItemValue] = useState<RegisterDataType>({...RegisterDatas})
  const history = useHistory()
  const setManyInputValue = function(name:string, value:string) {
    setRegisterItemValue({...registerItemValue, ...{
      [name]: value
    }})
  }

  return (
    <div style={divStyle}>
      <h3 style={titleStyle}>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</h3>
      {RegisterItemList.map((val, index) =>  <RegisterItem key={val + index.toString()} type={val.type} label={val.label} name={val.name} callback={setManyInputValue}></RegisterItem>)}
      <div style={{marginTop: '20px'}}>
        <Button name="注册" func={() => registerClick(registerItemValue) } style={{marginRight: '20px'}}></Button>
        <Button name="进入首页" func={() => {history.push('/')}}></Button>
      </div>
    </div>
  )
}

export default Register