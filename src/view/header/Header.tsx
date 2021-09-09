const HeaderStyle  = require('./Header.module.scss')
import { InlintStyleType } from '@/shims'
import Input from '@/component/input/InputSearch'
import Content from '@/view/content/Content'

const LoginStyle:InlintStyleType = {
    marginLeft: '20px'
}

const Header = function() {
    return (
        <div>
            <div className= { HeaderStyle.header }>
                <div>
                    <div>Logo</div>
                    <div className={HeaderStyle.search}>
                        <Input></Input>
                    </div>
                    <div style={LoginStyle}>login</div>
                </div>
            </div>
            <Content></Content>
        </div>
    )
}

export default Header