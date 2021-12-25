import { Editor, EditorState, DraftHandleValue, KeyBindingUtil, getDefaultKeyBinding } from "draft-js"
import 'draft-js/dist/Draft.css'
import  React, { useState } from "react"

const {hasCommandModifier} = KeyBindingUtil

// type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;

function myKeyBindingFn(e: React.KeyboardEvent<[]>): string|null {
    if (['s', 'S'].indexOf(e.key) !== -1 /* `S` key */ && hasCommandModifier(e)) {
      return 'myeditor-save'
    }
    return getDefaultKeyBinding(e)
  }

interface EditroPropType {
    name: String;
}

const MyEditor = React.forwardRef((props:EditroPropType, ref:any) => {
    const [editorState, setEditorState]  = useState(() => EditorState.createEmpty())
    // onkeyup 函数
    const handleKeyCommon = (comomt: string): DraftHandleValue  => {
        if (comomt === 'myeditor-save') {
            console.log('保存')
        } 
        return 'handled'
    }

    return (<Editor 
        ref={ref} 
        editorState={editorState} 
        onChange={setEditorState} 
        handleKeyCommand={handleKeyCommon} 
        keyBindingFn={myKeyBindingFn}
        ></Editor>)
})


export default MyEditor