import styled from 'styled-components'
const TitleStyle = require('./Title.module.scss')


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

const Title = function() {
    return (
        <div>
            <ImgStyle src={require('./touxiang.png').default} alt="" />
            <DivStyle>
                <a href="#" className={TitleStyle.topicLink}>这是标题内容</a>
            </DivStyle>
        </div>
    )
}

export default Title