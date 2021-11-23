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
                {
                    ['板块1', '板块2', '板块3', '板块4'].map((val, index) => (<Button 
                        key={val + index.toString()}
                        name={val} path={'/content/' + val}></Button>))
                }
            </div>
            <div style={PathBoxStyle}>
                <Path pathlist={tmpArray}></Path>
            </div>
        </div>
    )
}

export default TabList