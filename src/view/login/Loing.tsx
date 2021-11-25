import { InlintStyleType, InputCallBackType, LoginDataType } from '@/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'
import React, { useState } from 'react'
import { login } from '@/api/register'
import { LoingItemList, LoingDatas } from '@/data/CommonData'

interface LoingItemPropsType {
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

// const testCheckboxChange = function(event:React.ChangeEvent<HTMLInputElement>) {

//     console.log(event.target.checked)
// }

// 注册元素
const LoinItem = function(props:LoingItemPropsType) {
    const [checked, setChecked] = useState<boolean>(true)
    return (
        <div style={{display: 'flex', width: '300px', marginBottom: '5px'}}>
        <div style={{flex: '2'}}>
            {props.label}
        </div>
        {
            props.name==='rememberMe'
            ? <div style={{ width: '200px', flex: '5 1 0%'}}> <input type="checkbox" name={props.name} checked = {checked} onChange={(event) => {
                setChecked(event.target.checked)
                props.callback('rememberMe', (event.target.checked).toString())
            }} /> </div>
            : <Input style={{flex: '5'}} name={props.name} callback={props.callback}></Input>
        }
        </div>
    )
}

const loginClick = function(value:LoginDataType) {
    login(value).then(resp => {
        console.log(resp)
    })
}

function Login() {
  const [loginItemValue, setRegisterItemValue] = useState<LoginDataType>({...LoingDatas})

  const setManyInputValue = function(name:string, value:string|boolean) {
    console.log(name, value)
    if(name === 'rememberMe') {
        if(value === "false") {
            value = false
        } else {
            value = true
        }
    }
    setRegisterItemValue({...loginItemValue, ...{
      [name]: value
    }})
  }

  return (
    <div style={divStyle}>
      <h3 style={titleStyle}>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</h3>
      { LoingItemList.map((val, index) => <LoinItem key={val + index.toString()} label={val.label} name={val.name} callback={setManyInputValue}></LoinItem>) }
      <div style={{marginTop: '20px'}}>
        <Button name="登录" style={{marginRight: '20px'}} value={loginItemValue} func={loginClick}></Button>
        <Button name="清除"></Button>
      </div>
    </div>
  )
}

export default Login