const HeaderStyle  = require('./Header.module.scss')
import { InlintStyleType } from '@/shims'
import Input from '@/component/input/InputSearch'
import Content from '@/view/content/Content'

const SearchBoxStyle:InlintStyleType = {
    marginTop: '10px',
    lineHeight: '0px'
}

const UserNameStyle:InlintStyleType = {
    float: 'right'   
}

const Header = function() {
    return (
        <div>
            <div className= { HeaderStyle.header }>
                <div>
                    <div>Logo</div>
                    <div className={HeaderStyle.search} style={SearchBoxStyle}>
                        <Input></Input>
                    </div>
                    <div style={UserNameStyle} className={HeaderStyle.userlist}>我们的愿景</div>
                    <div style={UserNameStyle} className={HeaderStyle.userlist}>设置</div>
                    <div style={UserNameStyle} className={HeaderStyle.userlist}>记事本</div>
                    <div style={UserNameStyle} className={HeaderStyle.userlist}>用户名</div>
                </div>
            </div>
            <Content></Content>
        </div>
    )
}

export default Header