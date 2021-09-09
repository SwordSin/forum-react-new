const TablistStyle = require('./Tablist.module.scss')
// import {InlineStyleType} from '@/typings/shims'

import Button from '@/component/button/Button'
import { InlintStyleType } from '@/shims'

import Path from '@/view/path/Path'

const TablistBoxStyle:InlintStyleType = {
    float: 'left'
}

const PathBoxStyle:InlintStyleType = {
    float: 'right',
    marginRight: '20px',
    lineHeight: '30px'
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
            <div style={PathBoxStyle}>
                <Path pathlist={['首页', '内容', 'abcs']}></Path>
            </div>
        </div>
    )
}

export default TabList