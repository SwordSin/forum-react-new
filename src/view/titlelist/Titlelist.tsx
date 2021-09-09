import styled from 'styled-components'
import Title from './Title'


const TitlelistStyle = styled.div`
    float: left;
    width: 100%;
`

const Titlelist = function() {
    return (
        <TitlelistStyle>
            <Title name="标题1" titleType="标题类型1"></Title>
            <Title name="标题2" titleType="标题类型1"></Title>
            {/* <Title></Title> */}
        </TitlelistStyle>
    )
}

export default Titlelist