import { InlintStyleType } from '@/typings/shims'
import React, { useState } from 'react'

// const InputboxStyle:InlintStyleType = {
//     width: '200px',
//     borderRadius: '3px',
//     border: '1px solid var(--box-border-focus-color)'
// }
const InputStyle:InlintStyleType = {
    width: '100%',
    height: '100%',
    fontSize: '16px',
    lineHeight: '16px',
    padding: '1px',
    paddingBottom: '2px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box'
}

// 需要传入Input的函数类型

// 回车换行
interface EnterCallBackType {
    (inputName:string): string;
}
// 失去焦点
interface BlurCallBackType {
    (data:string): string;
}

const Input = React.forwardRef(function(props: {style?: InlintStyleType, placeholder?:string, name: string, type?: string, callBackEnter?:EnterCallBackType, callBackBulr?:BlurCallBackType}, ref: any) {
    const [value, setValue] = useState('')
    // 表单赋值
    const setInputValue = function(event:React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    return (
        <div style={props.style}>
            <input ref={ ref } type={props.type} style={InputStyle} name={props.name} value={value} onChange={ setInputValue } placeholder={ props.placeholder }></input>
        </div>
    )
})

export default Input