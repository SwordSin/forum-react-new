import styled from 'styled-components'
import Title from './Title'
import Page from '@/component/page/index'


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
            <Page></Page>
        </TitlelistStyle>
    )
}

export default Titlelist