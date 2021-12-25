import styled from 'styled-components'
// import Tab from '@/component/button/Tab'
import Topic from '@/component/topic/Topic'
import { useRouteMatch } from 'react-router-dom'
import { Tag } from 'antd'
import { InlintStyleType } from '@/shims'

const TitleDiv = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    border-bottom: 1px solid var(--box-border-color);
`

const DivStyle = styled.div`
    width: calc(100% - 60px);
    height: 50px;
    float: left;
    margin-left: 10px;
`

const SpanStyleOne:InlintStyleType = {
    fontSize: '15px',
    color: 'var(--color-fade)',
    lineHeight: '31px'
}

const SpanStyleTwo:InlintStyleType = {
    fontSize: '13px',
    color: '#778087',
    fontWeight: 'bold',
    lineHeight: '31px'
}

interface propsType {
    id: number;
    name: string;
    titleType: string;
}

const Title = function(props:propsType) {
    const math = useRouteMatch()
    return (
        <TitleDiv>
            {/* <ImgStyle src={require('./touxiang.png').default} alt="" /> */}
            <DivStyle>
                <Topic name={props.name} path={`${math.url}/${props.id}`}></Topic>
                <Tag color="#f5f5f5" style={{marginRight: '5px'}}>
                    <span style={{color: '#999'}}>
                        Twitter
                    </span>
                </Tag>
                <span style={SpanStyleOne}>
                    &nbsp;•&nbsp; 
                </span>
                <span style={SpanStyleTwo}>
                    用户名
                </span>
            </DivStyle>
        </TitleDiv>
    )
}

export default Title