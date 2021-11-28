// react富文本编辑器
const EditorStyle = require('./EditorStyle.module.scss')
import Input from '@/component/input/InputEditor'
import React, { useRef, useState } from 'react'
import { EditorInput } from '@/shims'

// 添加input
const addInput = function(inputName: string) {
    console.log(inputName)
    return inputName
}

// 生成随机字符串
Math.random().toString(36).slice(-8)

const EditorReact = function() {
    // inputlist
    const [inputList, setInpuList] = useState<EditorInput[]>([{
            focus: true,
            value: '',
            iname: 'input-0',
            ref: useRef<HTMLInputElement>()
    }])

    const addInput = (name: string) => {
        const inputListTmp: EditorInput[] = inputList.map(val => {
            return {...val, ...{focus: false}}
        })
        inputListTmp.push({
            focus: true,
            value: '',
            iname: name,
            ref: null
        })
        setInpuList(inputListTmp)
        return name
    }

    return (
    <div className={EditorStyle.editor}>
        {
            inputList.map(val => {
                return (<Input key={val.iname} name={val.iname} callBackEnter={addInput}></Input>)
            })
        }
    </div>)
}

export default EditorReact