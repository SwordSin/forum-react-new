const TablistStyle = require('./Tablist.module.scss')
// import {InlineStyleType} from '@/typings/shims'

import Button from '@/component/button/Button'
import { InlintStyleType } from '@/shims'
import { useLocation } from 'react-router-dom'

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
    const location = useLocation()
    const tmpArray = location.pathname.split('/')
    tmpArray.shift()
    tmpArray[0] = '首页'
    return (
        <div>
            <div className={TablistStyle.tablist} style={TablistBoxStyle}>
                <Button name="板块1" path="/content/板块1"></Button>
                <Button name="板块2" path="/content/板块2"></Button>
                <Button name="板块3" path="/content/板块3"></Button>
                <Button name="板块4" path="/content/板块4"></Button>
            </div>
            <div style={PathBoxStyle}>
                <Path pathlist={tmpArray}></Path>
            </div>
        </div>
    )
}

export default TabList