import styled from 'styled-components'
import Button from '@/component/button/Button'
import Topic from '@/component/topic/Topic'

const TitleDiv = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    border-bottom: 1px solid var(--box-border-color);
`

const ImgStyle = styled.img`
    width: 50px;
    height: 50px;
    float: left;
`

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

const buttonStyle = {
    backgroundColor: '#f5f5f5',
    color: 'var(--color-gray)',
    padding: '3px',
    marginTop: '3px'
}

const Title = function() {
    return (
        <TitleDiv>
            <ImgStyle src={require('./touxiang.png').default} alt="" />
            <DivStyle>
                <Topic name="表体内容"></Topic>
                <Button name="标题类型" style={buttonStyle}></Button>
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