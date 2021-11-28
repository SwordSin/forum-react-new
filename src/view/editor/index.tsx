// 引入编辑器
import Editor from '@/component/editorNew'
import React, { useRef, useState } from 'react'
import Button from '@/component/button/Button'
import { InlintStyleType, BoardInfoType } from '@/shims'
import Input from '@/component/input/Input'
import { useSelector } from 'react-redux'

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
    const refTextrea:any = useRef()
    const refInput:any = useRef()
    let boardInfoData:BoardInfoType[] = useSelector((state:{boardInfo: BoardInfoType[]}) => {
        return state.boardInfo
    })
    const [board, setBoard] = useState('0')
    const postsContent = {
        title: '',
        board: 0,
        content: ''
    }

    const clickButton = function() {
        postsContent.board = Number.parseInt(board)
        postsContent.title = refInput.current.value
        postsContent.content = refTextrea.current.value
        if (postsContent.board === 0) {
            alert('请选择板块')
        } else if (postsContent.content === '') {
            alert('请输入内容')
        } else if (postsContent.title === '') {
            alert('请输入标题')
        }
    }

    return (
    <React.Fragment>
        <div>这是编辑界面</div>
        <Editor name="editorText" ref={refTextrea}></Editor>
        <div style={buttonBoxStyle}>
            <Input ref={ refInput } placeholder="输入您创作的标题" name="title" style={InputStyle}></Input>
            <select style={SelectStyle} value={board} onChange={(event) => {setBoard(event.target.value)}}>
                <option value="0">请选择发布板块</option>
                {
                    Object.values(boardInfoData).map(val => <option key={val.boardId.toString()} value={val.boardId}>{val.boardName}</option>)
                }
            </select>
            <Button name="发布" func={clickButton}></Button>
        </div>
    </React.Fragment>)
}

export default EditorIndex