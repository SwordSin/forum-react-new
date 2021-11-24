const MyButtonStyle = require('./Tab.module.scss')
import { InlintStyleType } from "@/shims"


// 定义一个函数类型
interface PropsFunc {
    (value:any):void;
}

interface PropsType {
    name: string;
    style?: InlintStyleType;
    value?: any;
    func?: PropsFunc;
}

let funcb = function(value:any):void {
    console.log(value)
    console.log('这是个测试')
}
let valueb = ''

const Button = function(props : PropsType = {name: '这是按钮'}) {
    if(props.func) {
        funcb = props.func
    }
    if(props.value) {
        valueb = props.value
    }
    return (
        <input className={MyButtonStyle.mybutton} type="button" value={props.name} style={props.style} onClick={() => funcb(valueb)} />
    )
}

export default Button