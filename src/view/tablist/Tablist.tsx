const TablistStyle = require('./Tablist.module.scss')
// import {InlineStyleType} from '@/typings/shims'

import Button from '@/component/button/Button'
// const buttonStyle = {
//     marginLeft: '5px'
// }

// const TablistBoxStyle = styled.div`
//     float: left;
// `
// const PathBoxStyle = styled.div`
//     float: right;
// `

interface InlintStyleType {
    [key:string]:string;
}
// const test:something = 'asdf'
const TablistBoxStyle:InlintStyleType = {
    float: 'left'
}


const TabList = function() {
    return (
        <div>
            <div className={TablistStyle.tablist} style={TablistBoxStyle}>
                <Button name="板块1"></Button>
                <Button name="板块2"></Button>
                <Button name="板块3"></Button>
                <Button name="板块4"></Button>
            </div>
        </div>
    )
}

export default TabList