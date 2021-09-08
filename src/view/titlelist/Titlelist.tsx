import styled from 'styled-components'
import Title from './Title'


const TitlelistStyle = styled.div`
    float: left;
    width: 100%;
`

const Titlelist = function() {
    return (
        <TitlelistStyle>
            <Title></Title>
            <Title></Title>
            {/* <Title></Title> */}
        </TitlelistStyle>
    )
}

export default Titlelist