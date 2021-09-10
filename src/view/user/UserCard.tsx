import { InlintStyleType } from "@/shims"
const UserCardStyle = require('./UserCard.module.scss')
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
    return (
        <div style={boxStyle}>
            <div style={fristBoxStyle}>
                <img style={imgStyle} src={require('@/asset/image/touxiang.png').default} alt="" />
                <div style={userContentStyle}>
                    <span>
                        zhengzhipeng
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
        </div>
    )
}

export default UserCard