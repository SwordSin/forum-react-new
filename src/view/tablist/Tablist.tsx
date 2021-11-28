const TablistStyle = require('./Tablist.module.scss')
// import {InlineStyleType} from '@/typings/shims'

import Tab from '@/component/button/Tab'
import { InlintStyleType, BoardInfoType } from '@/shims'
import { useLocation } from 'react-router-dom'
import Path from '@/view/path/Path'
import { getBoardInfoList } from '@/api/board'
import { useEffect, useState } from 'react'

// 使用redux实现数据共享
import { useDispatch } from 'react-redux'


const TablistBoxStyle:InlintStyleType = {
    float: 'left'
}

const PathBoxStyle:InlintStyleType = {
    float: 'right',
    marginRight: '20px',
    lineHeight: '30px'
}

// let boardInfoData:BoardInfoType[]
// getBoardInfoList().then(resp => {
//     console.log('返回响应')
//     boardInfoData = resp.data
// })

const TabList = function() {
    const location = useLocation()
    const dispatch = useDispatch()
    const tmpArray = location.pathname.split('/')
    tmpArray.shift()
    tmpArray[0] = '首页'

    const [boardList, setBoardList] = useState<BoardInfoType[]>([])
    
    useEffect(() => {
        if(boardList.length === 0) {
            getBoardInfoList().then(resp => {
                setBoardList(resp.data)
                dispatch(
                    {
                      type: 'SET_BOARD_INFO',
                      payload: resp.data
                    }
                  )
            })
        }
    })

    return (
        <div>
            <div className={TablistStyle.tablist} style={TablistBoxStyle}>
                {
                    boardList.map(val => (<Tab 
                        key={val.boardId}
                        name={val.boardName} path={'/content/' + val.boardName}></Tab>))
                }
            </div>
            <div style={PathBoxStyle}>
                <Path pathlist={tmpArray}></Path>
            </div>
        </div>
    )
}

export default TabList