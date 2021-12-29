import {Editor, EditorState } from 'draft-js'
import React, { useState, ForwardedRef } from 'react'

const EditorTest = React.forwardRef((props: { name: string }, myRef: ForwardedRef<Editor>) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    
    const onchange = (editorState:EditorState) => {
        setEditorState(editorState)
    }

    return (
        <div className='editor' name-data={props.name}>
            <Editor ref={myRef} editorState={editorState} onChange={onchange} />
        </div>
    )
})

export default EditorTest