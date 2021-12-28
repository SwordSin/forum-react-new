import { InlintStyleType, UserInfoType } from "@/typings/shims"
const UserCardStyle = require('./UserCard.module.scss')
import { useSelector } from 'react-redux'
import { Button, Badge/* , Card, Statistic */, Typography} from 'antd'
// import { LikeOutlined } from '@ant-design/icons'
const { Text } = Typography


const boxStyle:InlintStyleType = {
    padding: '10px'
}

const imgStyle:InlintStyleType = {
    maxWidth: '48px',
    maxHeight: '48px',
    float: 'left',
    borderRadius: '4px'
}

const userContentStyle:InlintStyleType = {
    height: '24px',
    lineHeight: '24px',
    paddingLeft: '10px',
    float: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 48px)'
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
            {/* <Card> */}
            <Badge.Ribbon text="LV5" color="#f3a034" style={{top: '-5px'}}>
                <div style={fristBoxStyle}>
                    {/* <img style={imgStyle} src={require('@/asset/image/touxiang.png').default} alt="" /> */}
                    <img style={imgStyle} src={userInfo.headImg} alt="" />
                    <div style={userContentStyle}>
                        <span>
                            {userInfo.netName}
                        </span>
                        <span>
                            <Button type="primary" danger size="small" style={{marginLeft: '5px', height: '20px', padding: '0px 3px', fontSize: '11px'}}>大会员</Button>
                            {/* <Badge
                                className="site-badge-count-109"
                                count={ '大会员' }
                                style={{ backgroundColor: 'rgb(251, 114, 153)', marginLeft: '5px' }}
                            /> */}
                        </span>
                    </div>
                    <div style={userContentStyle}>
                        <span>
                            <Text type="secondary">
                                请输入个性签名,个性签名太长
                            </Text>
                        </span>
                    </div>
                </div>
            </Badge.Ribbon>
            {/* </Card> */}
            <div className={UserCardStyle.track}>
                <div>
                    <div>0</div>
                    <div>点赞</div>
                    {/* <Statistic title="点赞" value={100} prefix={<LikeOutlined />} /> */}
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