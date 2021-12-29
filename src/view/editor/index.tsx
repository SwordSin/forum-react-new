// 引入编辑器
// import Editor from '@/component/editorNew/index'
import MyEditor from '@/component/editorNew/DraftEdit'
import React, { useRef, useState, ForwardedRef } from 'react'
// import Button from '@/component/button/Button'
import { InlintStyleType, BoardInfoType, UserInfoType, PostsDataType } from '@/typings/shims'
import Input from '@/component/input/Input'
import { useSelector } from 'react-redux'
import { Button, Typography  } from 'antd'
import { convertToRaw, Editor, EditorState, RawDraftContentState } from 'draft-js'
import { savePostsInfoApi } from '@/api/board'

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
    const refTextrea:ForwardedRef<Editor> = useRef(null)
    // const refTextrea:any = useRef()
    const refInput:any = useRef()
    const boardInfoData:BoardInfoType[] = useSelector((state:{boardInfo: BoardInfoType[]}) => {
        // debugger
        // console.log(state.boardInfo)
        return state.boardInfo
    })
    const userInfoData:UserInfoType = useSelector((state:{userInfo: UserInfoType}) => {
        return state.userInfo
    })
    const [board, setBoard] = useState('0')

    const clickButton = function() {
        const savePostsParam:PostsDataType = {
            boardId: Number.parseInt(board),
            postsTitle: refInput.current.value,
            // postsContent: refTextrea.current.value,
            postsAuthId: userInfoData.userId,
            postsAuthName: userInfoData.netName,
            param1: '',
            param2: '',
            param3: '',
            param4: '',
            param5: '',
            param6: ''
        }
        console.log(savePostsParam)
        // debugger
        let tmpEditorState:EditorState
        if (refTextrea.current?.props.editorState) {
            tmpEditorState = refTextrea.current?.props.editorState
            const contentObj: RawDraftContentState = convertToRaw(
                tmpEditorState.getCurrentContent()
            )
            console.log(contentObj)
        }
        
        // refTextrea.current?.props.onChange
        // refTextrea.current.props.editorState.getCurrentContent()
        console.log(refTextrea)
        // let tmp:boolean = true
        // if (savePostsParam.boardId === 0) {
        //     tmp = false
        //     alert('请选择板块')
        // } else if (savePostsParam.postsContent === '') {
        //     tmp = false
        //     alert('请输入内容')
        // } else if (savePostsParam.postsTitle === '') {
        //     tmp = false
        //     alert('请输入标题')
        // }
        // if(tmp) {
        //     savePostsInfoApi(savePostsParam).then(resp => {
        //         if(resp.data.status === 1) {
        //             alert('保存帖子成功')
        //         } else {
        //             alert(resp.data.data)
        //         }
        //     })
        // } 
    }

    return (
    <React.Fragment>
        <Typography.Title level={3}>请输入您的内容</Typography.Title>
        <MyEditor ref={refTextrea}></MyEditor>
        <div style={buttonBoxStyle}>
            <Input ref={ refInput } placeholder="输入您创作的标题" name="title" style={InputStyle}></Input>
            <select style={SelectStyle} value={board} onChange={(event) => {setBoard(event.target.value)}}>
                <option value="0">请选择发布板块</option>
                {
                    Object.values(boardInfoData).map((val) =>  <option key={val.boardId} value={val.boardId}>{val.boardName}</option>)
                }
            </select>
            <Button onClick={clickButton}>发布</Button>
        </div>
    </React.Fragment>)
}

export default EditorIndex