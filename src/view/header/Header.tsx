const HeaderStyle  = require('./Header.module.scss')
import { InlintStyleType, UserInfoType } from '@/shims'
import Content from '@/view/content/Content'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'

// 使用antd组件
import { Menu, Input } from 'antd'

import { useSelector } from 'react-redux'
// 页头导航菜单的央视
const MyMenuStyle:InlintStyleType = {
    margin: '0 auto',
    maxWidth: 'var(--content-width)',
    height: '100%'
}

// 用户和游客的不同权限
const HeaderTab = {
    username: ['用户名', '笔记本', '设置', '我们的愿景'],
    tourist: ['注册', '登录']
}

// 用户功能按钮点击事件
const userFunction = function(val:string, history:any) {
    if(val === '登录') {
        history.push({
            pathname: '/login'
        })
    } else if(val === '注册') {
        history.push({
            pathname: '/register'
        })
    } else {
        console.log('其他按钮')
    }
}

const Header = function() {
    const history = useHistory()

    const [titles, setTitles] = useState<string[]>(HeaderTab.tourist)

    // const testFun = function() {
    // }
    let netName = useSelector((state:{userInfo: UserInfoType}) => {
        return state.userInfo.netName
    })
    
    // 设置userName的值
    useEffect(() => {
        if(netName !== '') {
            HeaderTab.username[0] = netName
            // HeaderTab.username.pop()
            // HeaderTab.username.push(netName)
            setTitles(HeaderTab.username)
        }
    }, [netName])
    // setTitles(HeaderTab.username)
    return (
        <React.Fragment>
            <Menu mode='horizontal' style={MyMenuStyle}>
                { 
                    titles.map((val, index) => 
                        (<Menu.Item key={'title' + index.toString()} onClick={userFunction.bind(null, val, history)}>
                        {val}
                        </Menu.Item>)
                    )
                }
                <Menu.Item>
                    <Input placeholder="Basic usage" ></Input>
                </Menu.Item>
            </Menu>
            <Content></Content>
        </React.Fragment>
        // <div>
        //     <div className= { HeaderStyle.header }>
        //         <div>
        //             {/* 用户功能按钮 */}
        //             { 
        //                 titles.map((val, index) => 
        //                     (<div 
        //                         key={'title' + index.toString()}
        //                         style={UserNameStyle}
        //                         className={HeaderStyle.userlist}
        //                         onClick={userFunction.bind(null, val, history)}
        //                     >{val}</div>)
        //                 )
        //             }
        //         </div>
        //     </div>
        //     <Content></Content>
        // </div>
    )
}

export default Header