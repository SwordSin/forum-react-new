import styled from 'styled-components'
import { InlintStyleType } from '@/shims'

// const InputStyle = {
//     boxSizing: 'border-box',
//     width: '100%',
//     height: '100%',
//     fontSize: '16px',
//     lineHeight: '16px',
//     padding: '1px',
//     border: '0',
//     fontFamily: 'helvetica neue,luxi sans,Tahoma,hiragino sans gb,STHeiti,sans-serif',
//     backgroundColor: 'transparenasdfasdt'
// }


const InputStyle = styled.input`
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 16px;
    padding: 1px;
    border: none;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
`

const SearchBox = styled.div`
    position: absolute;
    background-color: var(--box-background-color);
    top: 35px;
    left: 0;
    width: 100%;
    z-index: 10;
`

const boxStyle:InlintStyleType = {
    padding: '10px',
    fontSize: '14px',
    lineHeight: '150%',
    textAlign: 'left',
    borderBottom: '1px solid var(--box-border-color)'
}

const Input = function() {
    return (
        <div>
            <InputStyle type="text"></InputStyle>
            <SearchBox>
                <div style={boxStyle}>
                    <h3>内容1</h3>
                    <h3>内容2</h3>
                </div>
            </SearchBox>
        </div>
    )
}

export default Input