import { InlintStyleType, InputCallBackType } from '@/shims'
import { useState } from 'react'

const InputboxStyle:InlintStyleType = {
    width: '200px',
    borderRadius: '3px',
    border: '1px solid var(--box-border-focus-color)'
}
const InputStyle:InlintStyleType = {
    width: '100%',
    height: '100%',
    fontSize: '16px',
    lineHeight: '16px',
    padding: '1px',
    paddingBottom: '2px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box'
}

const Input = function(props: {style: InlintStyleType, name: string, callback: InputCallBackType, type: string}) {
    const [value, setValue] = useState('')
    return (
        <div style={{...InputboxStyle, ...props.style}}>
            <input type={props.type} style={InputStyle} name={props.name} value={value} onChange={e => {
                setValue(e.target.value)
                props.callback(props.name, e.target.value)
            }} ></input>
        </div>
    )
}

export default Input