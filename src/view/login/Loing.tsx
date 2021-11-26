import { InlintStyleType, LoginDataType } from '@/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'
import React, { useState } from 'react'
import { login } from '@/api/register'
import { LoingItemList, LoingDatas, InputStyle, InputboxStyle } from '@/data/CommonData'
import { getCookie } from '@/unit/commonMethods'
import { decrypt } from '@/unit/security'

// 使用redux实现数据共享
import { createStore } from 'redux'

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


const loginClick = function(value:LoginDataType) {
    login(value).then(resp => {
      // debugger
        if(Number.parseInt(resp.data) === 1) {
          location.href = '/'
        } else {
          alert('登录错误')
        }
    })
}

function Login() {
  const [loginItemValue, setRegisterItemValue] = useState<LoginDataType>({...LoingDatas})

  const setManyInputValue = function(name:string, value:string|boolean) {
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

  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div style={divStyle}>
      <h3 style={titleStyle}>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</h3>
      { LoingItemList.map((val, index) => (
        <React.Fragment key={index.toString()}>
            <div style={{display: 'flex', width: '300px', marginBottom: '5px'}}>
              <div style={{flex: '2'}}>
                  {val.label}
              </div>
              {
                  val.name==='rememberMe'
                  ? <div style={{ width: '200px', flex: '5 1 0%'}}> <input type={val.type} name={val.name} checked = {checked} onChange={(event) => {
                      setChecked(event.target.checked)
                      setManyInputValue(val.name, (event.target.checked).toString())
                  }} /> </div>
                  : val.name === 'password'
                  ? <div style={{...InputboxStyle, flex: '5 1 0%'}}> <input type={val.type} name={val.name} style={ InputStyle } value={loginItemValue.password} onChange={(event) => { setManyInputValue(val.name, event.target.value)}} onFocus={() => {
                    // 查看是否是记住密码的用户
                    const username = getCookie('username')
                    // debugger
                    if(username === loginItemValue.username) {
                      // 获取密码
                      const password = getCookie('password')
                      console.log(decrypt(password))
                      setRegisterItemValue({...loginItemValue, password: decrypt(password)})
                    }
                  }} /> </div>
                  : <Input style={{flex: '5'}} type={val.type} name={val.name} callback={setManyInputValue}></Input>
              }
            </div>
        </React.Fragment>
      )
      ) }

      <div style={{marginTop: '20px'}}>
        <Button name="登录" style={{marginRight: '20px'}} value={loginItemValue} func={loginClick}></Button>
        <Button name="进入首页"></Button>
      </div>
    </div>
  )
}

export default Login