const HeaderStyle  = require('./Header.module.scss')
import { InlintStyleType } from '@/shims'
import Input from '@/component/input/InputSearch'
import Content from '@/view/content/Content'

const LoginStyle:InlintStyleType = {
    marginLeft: '10px'
}

const SearchBoxStyle:InlintStyleType = {
    marginTop: '10px',
    lineHeight: '0px'
}

const UserNameStyle = {
    
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
                    <div style={{...LoginStyle, marginLeft: '60%'}}>用户名</div>
                    <div style={LoginStyle}>记事本</div>
                </div>
            </div>
            <Content></Content>
        </div>
    )
}

export default Header