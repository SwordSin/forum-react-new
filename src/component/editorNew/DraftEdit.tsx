import {Editor, EditorState } from 'draft-js'
import React, { useState, ForwardedRef, useEffect } from 'react'

const focusTest = () => {
    console.log('获取焦点')
}
const EditorTest = React.forwardRef((props: { name?: string }, myRef: ForwardedRef<Editor>) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    // useEffect(() => {
    //     // 给编辑器添加焦点
    // }, [])
    return (
        <div className='editor' style={{
            // padding: 15,
            backgroundColor: 'white',
            height: 400,
            overflowY: 'auto'
        }}>
            <Editor ref={myRef} editorState={editorState} 
                onChange={setEditorState}
                onFocus={focusTest}
             />
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