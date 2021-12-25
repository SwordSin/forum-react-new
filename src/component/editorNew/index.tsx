import { InlintStyleType } from '@/shims'
import React from 'react'


const editorBox:InlintStyleType = {
    marginTop: '10px'
}

const editor:InlintStyleType = {
    width: '99%',
    height: '500px',
    fontSize: '16px',
    padding: '5px'
}

const Editor = React.forwardRef((props:any, ref:any) => {
    // const ref:any = useRef()
    // ref.current?.focus()
    return (
        <div style={editorBox}>
            <textarea ref={ref} name={props.name} style={editor} placeholder="请输入想要编辑的内容"></textarea>
        </div>
    )
})


export default Editor