import { InlintStyleType, UserInfoType } from "@/typings/shims"
const UserCardStyle = require('./UserCard.module.scss')
import { useSelector } from 'react-redux'

const boxStyle:InlintStyleType = {
    padding: '10px'
}

const imgStyle:InlintStyleType = {
    maxWidth: '48px',
    maxHeight: '48px',
    float: 'left'
}

const userContentStyle:InlintStyleType = {
    height: '48px',
    lineHeight: '48px',
    paddingLeft: '10px',
    float: 'left'
}

const fristBoxStyle:InlintStyleType = {
    height: '49px'
}

const threeBoxStyle:InlintStyleType = {
    clear: 'both',
    padding: '10px'
}

const UserCard = function() {

    // 获取用户信息
    let userInfo:UserInfoType = useSelector((state:{userInfo: UserInfoType}) => {
        // console.log('-----------查看userinfo')
        // // debugger
        // console.log(state)
        return state.userInfo
    })
    return (
        <div style={boxStyle}>
            <div style={fristBoxStyle}>
                {/* <img style={imgStyle} src={require('@/asset/image/touxiang.png').default} alt="" /> */}
                <img style={imgStyle} src={userInfo.headImg} alt="" />
                <div style={userContentStyle}>
                    <span>
                        {userInfo.netName}
                    </span>
                </div>
            </div>
            <div className={UserCardStyle.track}>
                <div>
                    <div>0</div>
                    <div>收藏</div>
                </div>
                <div>
                    <div>0</div>
                    <div>关注</div>
                </div>
                <div>
                    <div>0</div>
                    <div>消息</div>
                </div>
            </div>
            <div style={threeBoxStyle}>
                <hr />
            </div>
            <div className={UserCardStyle.editer}>
                <img style={{height: '30px', width: '30px', float: 'left', marginRight: '10px'}} src={require('@/asset/image/compose.png').default} alt="" />
                <a href="/content/editor">创作新主题</a>
            </div>
        </div>
    )
}

export default UserCard