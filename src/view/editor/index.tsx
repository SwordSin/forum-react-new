// 引入编辑器
// import Editor from '@/component/editorNew/index'
import MyEditor from '@/component/editorNew/DraftEdit'
import React, { useRef, useState, ForwardedRef } from 'react'
// import Button from '@/component/button/Button'
import { /* InlintStyleType, */ BoardInfoType, UserInfoType, PostsDataType } from '@/typings/shims'
// import Input from '@/component/input/Input'
import { useSelector } from 'react-redux'
import { Button/* , Typography*/, Select, Form } from 'antd'
import { convertToRaw, Editor, EditorState, RawDraftContentState } from 'draft-js'
// import { savePostsInfoApi } from '@/api/board'

// const buttonBoxStyle:InlintStyleType = {
//     marginTop: '10px'
// }

const EditorIndex = function() {
    const refTextrea:ForwardedRef<Editor> = useRef(null)
    // const refTextrea:any = useRef()
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
        console.log('提交')
        const savePostsParam:PostsDataType = {
            boardId: Number.parseInt(board),
            postsTitle: 'test标题',
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
        <MyEditor ref={refTextrea}></MyEditor>
        <Form
            style={{marginLeft: '15px'}}
            name="basic"
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={clickButton}
        >
            <Form.Item
                label="请选择一个标题"
                name="username"
                rules={[{ required: true, message: '请选择一个标题' }]}>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="请选择发布的模块"
                    onChange={(value:string) => {setBoard(value)}}>
                    {
                        Object.values(boardInfoData).map((val) =>  <Select.Option key={val.boardId.toString()} value={val.boardId}>{val.boardName}</Select.Option>)
                    }
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
                <Button type="primary" htmlType="submit">发布</Button>
                {/* <Button type="primary" htmlType="submit">
                Submit
                </Button> */}
            </Form.Item>
        </Form>
    </React.Fragment>)
}

export default EditorIndex