const MyButtonStyle = require('./Tab.module.scss')
import { InlintStyleType } from "@/shims"


// 定义一个函数类型
interface PropsFunc<T> {
    (value:T):void;
}

interface PropsType<T> {
    name: string;
    style?: InlintStyleType;
    value?: T;
    func?: PropsFunc<T>;
}

const Button = function<T>(props : PropsType<T> = {name: '这是按钮'}) {
    let valueb:any = null
    if(props.value) {
        valueb = props.value
    }
    return (
        <input className={MyButtonStyle.mybutton} type="button" value={props.name} style={props.style} onClick={() => props.func && props.func(valueb)} />
    )
}

export default Button