import {EditorState} from "draft-js"
import {Editor} from "react-draft-wysiwyg"
import { useState } from 'react'



// function uploadImageCallBack(file:any) {
//   return new Promise(
//     (resolve, reject) => {
//       const xhr = new XMLHttpRequest()
//       xhr.open('POST', 'https://api.imgur.com/3/image')
//       xhr.setRequestHeader('Authorization', 'Client-ID XXXXX')
//       const data = new FormData()
//       data.append('image', file)
//       xhr.send(data)
//       xhr.addEventListener('load', () => {
//         const response = JSON.parse(xhr.responseText)
//         resolve(response)
//       })
//       xhr.addEventListener('error', () => {
//         const error = JSON.parse(xhr.responseText)
//         reject(error)
//       })
//     }
//   )
// }


const EditorTest = function(props: any) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState:EditorState):void => {
        // console.log(editorState)
        setEditorState(editorState)
    }
    return (
    <div className='editor' name-data={props.name}>
        <Editor
            editorState={editorState}
            localization={{
                locale: 'zh'
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
        />
      {/* <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}    
          toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
        }}
      /> */}
    </div>
    )
}

export default EditorTest