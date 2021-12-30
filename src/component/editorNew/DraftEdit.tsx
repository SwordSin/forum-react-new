import {Editor, EditorState } from 'draft-js'
import React, { useState, ForwardedRef } from 'react'
import { Input, Modal } from'antd'
import { BoldOutlined, LinkOutlined, PictureOutlined, BgColorsOutlined, CaretDownOutlined, FontSizeOutlined } from '@ant-design/icons'
const EditorStyle = require('./editor.module.scss')
import UploadModel from '@/component/uploadModel/UploadModel'

const focusTest = () => {
    console.log('获取焦点')
}

const EditorTest = React.forwardRef((props: { name?: string }, myRef: ForwardedRef<Editor>) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [showModal, setShowModal] = useState(0)

    // 上传图片
    const uploadImage = () => {
        console.log('上传图片')
        const tmp = showModal + 1
        setShowModal(tmp)
    }
    // useEffect(() => {
    //     // 给编辑器添加焦点
    // }, [])
    return (
        <div>
            <div style={{clear: 'both', height: '35px', paddingLeft: '5px', marginTop: '10px'}}>
                <div className={EditorStyle.fontPic}>
                    {/* 加粗 */}
                    <BoldOutlined />
                    加粗
                </div>
                <div className={EditorStyle.fontPic}>
                    <LinkOutlined />
                    链接
                </div>
                <div className={EditorStyle.fontPic}>
                    <FontSizeOutlined />
                    标题
                </div>
                <div className={EditorStyle.fontPic} onClick={uploadImage}>
                    <PictureOutlined />
                    插入图片
                    {/* <CaretDownOutlined style={{fontSize: '12px', display: 'inline'}} /> */}
                </div>
                <div className={EditorStyle.fontPic}>
                    <BgColorsOutlined />
                    字体颜色
                    <CaretDownOutlined style={{fontSize: '12px', display: 'inline'}} />
                </div>
            </div>
            {/* 标题 */}
            <div style={{width: '100%', clear: 'both'}}>
                <Input placeholder="请输入标题" bordered={false} style={{ fontSize: '30px', marginLeft: '5px', borderBottom: '1px solid #ebebeb', width: '70%', display: 'block'}} />
            </div>

            {/* 富文本编辑 */}
            <div className='editor' style={{
                margin: 15,
                backgroundColor: 'white',
                height: 400,
                overflowY: 'auto',
                clear: 'both'
            }}>
                {/* 富文本功能: 链接 - 图片 - 加粗 - 改变颜色 */}
                <Editor ref={myRef} editorState={editorState}
                    onChange={setEditorState}
                    onFocus={focusTest}
                />
            </div>

            {/* 功能所需jsx */}
            
            {/* 上传图片 */}
            <UploadModel showModal={showModal}></UploadModel>
        </div>
    )
})

export default EditorTest


// const onchange = (editorState:EditorState) => {
//     const contentObj: RawDraftContentState = convertToRaw(
//         editorState.getCurrentContent()
//     )
//     setEditorState(editorState)
// }