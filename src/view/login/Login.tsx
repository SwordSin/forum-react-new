import { InlintStyleType, LoginDataType, UserInfoType } from '@/shims'
import Input from '@/component/input/InputLogin'
import Button from '@/component/button/Button'
import React, { useState } from 'react'
import { login } from '@/api/register'
import { LoingItemList, LoingDatas, InputStyle, InputboxStyle } from '@/data/CommonData'
import { getCookie } from '@/unit/commonMethods'
import { decrypt } from '@/unit/security'

// 使用redux实现数据共享
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

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


// const loginClick = function(value:LoginDataType, dispatch: Dispatch<{type: string, payload: UserInfoType}>) {
// 定义回调函数的类型
interface DispatchUserInfoFun {
  (userData:UserInfoType):void
} 
const loginClick = function(value:LoginDataType, func:DispatchUserInfoFun) {
  login(value).then(resp => {
    if(resp.data.status === 1) {
      console.log('提交状态')
      console.log({
        type: 'userInfoData',
        payload: resp.data.data
      })
      func(resp.data.data)
      location.href = '/'
    } else {
      alert("发生登录错误")
    }
    console.log(resp)
  })
}

function Login() {
  const [loginItemValue, setRegisterItemValue] = useState<LoginDataType>({...LoingDatas})
  const history = useHistory()
  const dispatch = useDispatch()

  // 提交数据
  const dispatchUserInfo = (userInfo: UserInfoType) => {
    console.log('---------查看提交的数据')
    console.log(userInfo)
    // debugger
    dispatch(
      {
        type: 'SET_USER_INFO',
        payload: userInfo
      }
    )
  }

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
                    console.log('获取用户名', loginItemValue.username)
                    // 查看是否是记住密码的用户
                    const password = getCookie('username' + loginItemValue.username)
                    // debugger
                    if(password !== '') {
                      // 获取密码
                      // const password = getCookie('password')
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
        <Button name="登录" style={{marginRight: '20px'}} func={() => loginClick(loginItemValue, dispatchUserInfo) }></Button>
        <Button name="进入首页" func={ () => history.push('/') }></Button>
      </div>
    </div>
  )
}

export default Login