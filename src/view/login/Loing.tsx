// import Input from '@/component/input/Input'
import React, { useState } from "react"
import { useRef } from "react"


const eventFun = function(event:React.MouseEvent, count:number) {
    console.log(count)
    console.log(event.target)
}

const test = function(e:React.MouseEvent) {
    console.log(e)
}

interface InputValueTypes {
    [key:string]: string;
}

const Login = function() {
    const textInput = useRef(null)

    const [inputValues, setInputValues] = useState<InputValueTypes>({name: '', email: ''})
    
    const inputValueFun = function(e:React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setInputValues({
            [e.target.name]: e.target.value
        })
    }
    
    const [count, setCount] = useState<number>(0)
    const test1 = true

    const [testValue, setTestValue] = useState('')
    const inputTestValueFun = function(e:React.ChangeEvent<HTMLInputElement>) {
        console.log(textInput.current)
        setTestValue(e.target.value)
    }


    return (
        <div>
            <h1>useState</h1>
            <p>你点击了{count}下</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p >react 传递参数</p>
            <button onClick={(e) => eventFun(e, count)}>点击</button>
            <button onClick={test}>测试</button>
            {/* 条件渲染 */}
            {
                true && <div>这是有一个&&条件</div>
            }
            {
                test1
                ? <div>这是一个三木运算符</div>
                : <div>fals</div>
            }

            {
                [1, 2, 3, 4].map(val => <div key={val}>列表{val}</div>)
            }

            {/* 多个表单输入 */}
            <input type="text" name="name" value={inputValues.name} onChange={inputValueFun} />
            <input type="text" name="email" value={inputValues.email} onChange={inputValueFun} />
            <input ref={textInput} type="text" name="email" value={testValue} onChange={inputTestValueFun} />
        </div>
    )
}

export default Login


