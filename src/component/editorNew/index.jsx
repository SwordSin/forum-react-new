// import { InlintStyleType } from '@/shims'
// import React, {useState} from 'react'
// import { Editor, EditorState } from 'draft-js'


// const editorBox:InlintStyleType = {
//     marginTop: '10px'
// }

// const editor:InlintStyleType = {
//     width: '99%',
//     height: '500px',
//     fontSize: '16px',
//     padding: '5px'
// }

// const MyEditor = React.forwardRef((props:any, ref:any) => {
//     const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty(),
//   )

//   return <Editor editorState={editorState} onChange={setEditorState} />
// })


// export default MyEditor

import React from 'react'
import { Editor, EditorState} from 'draft-js'
class DraftEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onChange = editorState => {
            this.setState({ editorState })
        }
    }

    render() {
        let editorState = this.state.editorState
        return (
            <Editor
                placeholder={'Write what you would say.'}
                editorState={editorState}
                onChange={this.onChange}
            />
        )
    }
}

export default DraftEditor