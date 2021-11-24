import { InlintStyleType } from '@/shims'
import Input from '@/component/input/Input'
import Button from '@/component/button/Button'

interface RegisterItemPropsType {
  name: string;
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
        {props.name}
      </div>
      <Input style={{flex: '5'}}></Input>
    </div>
  )
}

function Register() {

  return (
    <div style={divStyle}>
      <h3 style={titleStyle}>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</h3>
      <RegisterItem name="用户名"></RegisterItem>
      <RegisterItem name="email"></RegisterItem>
      <RegisterItem name="密码"></RegisterItem>
      <RegisterItem name="确认密码"></RegisterItem>

      <Button name="清除"></Button>
      <Button name="注册"></Button>
    </div>
  )
}

export default Register