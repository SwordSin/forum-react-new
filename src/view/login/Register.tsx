import { InlintStyleType, InputCallBackType, RegisterDataType } from '@/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'
import { useState } from 'react'
import { registerUser } from '@/api/register'
import { RegisterItemList, RegisterDatas } from '@/data/CommonData'

interface RegisterItemPropsType {
  label: string;
  name: string;
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
      <Input style={{flex: '5'}} name={props.name} callback={props.callback}></Input>
    </div>
  )
}

const registerClick = function(value:RegisterDataType) {
  registerUser(value).then(resp => {
    console.log(resp)
  })
}

function Register() {
  const [registerItemValue, setRegisterItemValue] = useState<RegisterDataType>({...RegisterDatas})

  const setManyInputValue = function(name:string, value:string) {
    setRegisterItemValue({...registerItemValue, ...{
      [name]: value
    }})
  }

  return (
    <div style={divStyle}>
      <h3 style={titleStyle}>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</h3>
      {RegisterItemList.map((val, index) =>  <RegisterItem key={val + index.toString()} label={val.label} name={val.name} callback={setManyInputValue}></RegisterItem>)}
      <div style={{marginTop: '20px'}}>
        <Button name="清除" style={{marginRight: '20px'}}></Button>
        <Button name="注册" value={registerItemValue} func={registerClick}></Button>
      </div>
    </div>
  )
}

export default Register