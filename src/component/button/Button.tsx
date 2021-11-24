const MyButtonStyle = require('./Tab.module.scss')
import { PropsType } from "@/shims"


const Button = function(props : PropsType = {name: '这是按钮'}) {
    return (
        <input className={MyButtonStyle.mybutton} type="button" value={props.name} />
    )
}

export default Button