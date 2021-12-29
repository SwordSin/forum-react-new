import {Editor, EditorState } from 'draft-js'
import React, { useState, ForwardedRef } from 'react'
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
            
            <div className='editor' style={{
                // padding: 15,
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