import { InlintStyleType, InputCallBackType } from '@/shims'
import { useState } from 'react'
import styled from 'styled-components'

const InputStyle:InlintStyleType = {
    width: '200px',
    borderRadius: '3px',
    border: '1px solid var(--box-border-focus-color)'
}

const InputStyleInline = styled.input`
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 16px;
    padding: 1px;
    padding-bottom: 2px;
    border: none;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
`

const Input = function(props: {style: InlintStyleType, name: string, callback: InputCallBackType}) {
    const [value, setValue] = useState('')
    return (
        <div style={{...InputStyle, ...props.style}}>
            <InputStyleInline type="text" name={props.name} value={value} onChange={e => {
                setValue(e.target.value)
                props.callback(props.name, e.target.value)
            }} ></InputStyleInline>
        </div>
    )
}

export default Input