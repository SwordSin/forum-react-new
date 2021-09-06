const HeaderStyle  = require('./Header.module.scss')

import Input from '@/component/input/Input'

const LoginStyle = {
    marginLeft: '20px'
}

const Header = function() {
    return (
        <div className= { HeaderStyle.header }>
            <div>
                <div>Logo</div>
                <div className={HeaderStyle.search}>
                    <Input></Input>
                </div>
                <div style={LoginStyle}>login</div>
            </div>
        </div>
    )
}

export default Header