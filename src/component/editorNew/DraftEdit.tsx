import {Editor, EditorState } from 'draft-js'
import React, { useState, ForwardedRef } from 'react'
import { Input } from'antd'
import { BoldOutlined, LinkOutlined, PictureOutlined, BgColorsOutlined, CaretDownOutlined, FontSizeOutlined } from '@ant-design/icons'
const EditorStyle = require('./editor.module.scss')

const focusTest = () => {
    console.log('获取焦点')
}
const EditorTest = React.forwardRef((props: { name?: string }, myRef: ForwardedRef<Editor>) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
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
                <div className={EditorStyle.fontPic}>
                    <PictureOutlined />
                    插入图片<CaretDownOutlined style={{fontSize: '12px', display: 'inline'}} />
                </div>
                <div className={EditorStyle.fontPic}>
                    <BgColorsOutlined />
                    字体颜色
                    <CaretDownOutlined style={{fontSize: '12px', display: 'inline'}} />
                </div>
            </div>
            
            <div style={{width: '100%', clear: 'both'}}>
            <Input placeholder="请输入标题" bordered={false} style={{ fontSize: '30px', marginLeft: '5px', borderBottom: '1px solid #ebebeb', width: '70%', display: 'block'}} />
            </div>

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