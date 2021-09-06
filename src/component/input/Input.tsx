import styled from 'styled-components'

// const InputStyle = {
//     boxSizing: 'border-box',
//     width: '100%',
//     height: '100%',
//     fontSize: '16px',
//     lineHeight: '16px',
//     padding: '1px',
//     border: '0',
//     fontFamily: 'helvetica neue,luxi sans,Tahoma,hiragino sans gb,STHeiti,sans-serif',
//     backgroundColor: 'transparent'
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

const Input = function() {
    return (
        <InputStyle type="text"></InputStyle>
    )
}

export default Input