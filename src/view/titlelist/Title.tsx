import styled from 'styled-components'
import Tab from '@/component/button/Tab'
import Topic from '@/component/topic/Topic'
import { useRouteMatch } from 'react-router-dom'

const TitleDiv = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    border-bottom: 1px solid var(--box-border-color);
`

// const ImgStyle = styled.img`
//     width: 50px;
//     height: 50px;
//     float: left;
// `

const DivStyle = styled.div`
    width: calc(100% - 60px);
    height: 50px;
    float: left;
    margin-left: 10px;
`

const SpanStyleOne = styled.span`
    font-size: 15px;
    color: var(--color-fade);
    line-height: 31px;
`

const SpanStyleTwo = styled.span`
    font-size: 15px;
    color: #778087;
    font-weight: bold;
    line-height: 31px;
`

const tabStyle = {
    backgroundColor: '#f5f5f5',
    color: 'var(--color-gray)',
    padding: '3px',
    marginTop: '3px'
}

interface propsType {
    name: string;
    titleType: string;
}

const Title = function(props:propsType) {
    const math = useRouteMatch()
    return (
        <TitleDiv>
            {/* <ImgStyle src={require('./touxiang.png').default} alt="" /> */}
            <DivStyle>
                <Topic name={props.name} path={`${math.url}/${props.name}`}></Topic>
                <Tab name={props.titleType} style={tabStyle}></Tab>
                <SpanStyleOne>
                    &nbsp;•&nbsp; 
                </SpanStyleOne>
                <SpanStyleTwo>
                    用户名
                </SpanStyleTwo>
            </DivStyle>
        </TitleDiv>
    )
}

export default Title