// const HeaderStyle  = require('./Header.module.scss')
import { UserInfoType } from '@/typings/shims'
import Content from '@/view/content/Content'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

// 使用antd组件
import { Menu, Input, Row, Col } from 'antd'

import { useSelector } from 'react-redux'
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
            setTitles(HeaderTab.username)
        }
    }, [netName])
    // setTitles(HeaderTab.username)
    return (
        <React.Fragment>
                <Row>
                    <Col span={4} offset={2}>
                        <Input prefix={<SearchOutlined />} placeholder="Basic usage" style={{marginTop: '7px'}} ></Input>
                    </Col>
                    <Col span={8} offset={8}>
                        <Menu mode='horizontal' style={{float: 'right'}}>
                            { 
                                titles.map((val, index) => 
                                    (<Menu.Item key={'title' + index.toString()} style={{padding: '0 8px'}} onClick={userFunction.bind(null, val, history)}>
                                    {val}
                                    </Menu.Item>)
                                )
                            }
                        </Menu>
                    </Col>
                </Row>
            <Content></Content>
        </React.Fragment>
    )
}

export default Header