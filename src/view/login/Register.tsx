import { useState } from "react"
import { InlintStyleType } from '@/shims'

function Register() {

  // state
  const registerInfo:InlintStyleType =  {
    'username': '',
    'password': '',
    'netName': '',
    'email': '',
    'phone': ''
  }
  const [formData, setFormData] = useState(registerInfo)

  const changeInput = function (e: any) {
    // debugger
    // debugger
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // 渲染表单列表
  const FormList = [['username', '用户名'], ['password', '密码'], ['netName', '昵称'], ['email', '邮箱'], ['phone', '电话']].map((value, index) => {
    // let usetype = 'text'
    // if (value[0] === 'password') {
    //   usetype = 'password'
    // } else if (value[0] === 'phone') {
    //   usetype = 'number'
    // }
    return (
      <div key={index.toString()}>
        <input value={formData[value[0]]} name={ value[0] } onChange={changeInput} />
      </div>
    )
  }
  )

  // 提交内容
  const addUser = function () {
      console.log('提交注册内容')
  }

  return (
    <div>
      <h3>欢迎sdafasdfsdafas加入</h3>
      {FormList}
      <button onClick={ addUser }>提交</button>
    </div>
  )
}

export default Register