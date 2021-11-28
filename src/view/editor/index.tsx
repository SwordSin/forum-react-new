// 引入编辑器
import Editor from '@/component/editorNew'
import React, { useRef } from 'react'
import Button from '@/component/button/Button'
import { InlintStyleType } from '@/shims'
import Input from '@/component/input/Input'

const buttonBoxStyle:InlintStyleType = {
    marginTop: '10px'
}
const InputStyle:InlintStyleType = {
    border: '1px solid',
    float: 'left',
    width: '200px',
    marginRight: '15px'
}

const SelectStyle:InlintStyleType = {
    marginRight: '15px'
}

const EditorIndex = function() {
    const ref:any = useRef()
    return (
    <React.Fragment>
        <div>这是编辑界面</div>
        <Editor name="editorText" ref={ref}></Editor>
        <div style={buttonBoxStyle}>
        <Input name="title" style={InputStyle}></Input>
        <select name="cars" style={SelectStyle}>
            <option selected hidden disabled value="">发布的主题</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
            <Button name="发布"></Button>
        </div>
    </React.Fragment>)
}

export default EditorIndex