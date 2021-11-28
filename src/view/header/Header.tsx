const HeaderStyle  = require('./Header.module.scss')
import { InlintStyleType, UserInfoType } from '@/shims'
import Input from '@/component/input/InputSearch'
import Content from '@/view/content/Content'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

const SearchBoxStyle:InlintStyleType = {
    marginTop: '10px',
    lineHeight: '0px'
}

const UserNameStyle:InlintStyleType = {
    float: 'right'
}

// 用户和游客的不同权限
const HeaderTab = {
    username: ['我们的愿景', '设置', '笔记本', '用户名'],
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
            HeaderTab.username.pop()
            HeaderTab.username.push(netName)
            setTitles(HeaderTab.username)
        }
    }, [netName])
    // setTitles(HeaderTab.username)
    return (
        <div>
            <div className= { HeaderStyle.header }>
                <div>
                    <div>Logo</div>
                    {/* 搜索框 */}
                    <div className={HeaderStyle.search} style={SearchBoxStyle}>
                        <Input></Input>
                    </div>
                    {/* 用户功能按钮 */}
                    { 
                        titles.map((val, index) => 
                            (<div 
                                key={'title' + index.toString()}
                                style={UserNameStyle}
                                className={HeaderStyle.userlist}
                                onClick={userFunction.bind(null, val, history)}
                            >{val}</div>)
                        )
                    }

                    {/* <button onClick={testFun}>测试按钮</button> */}
                </div>
            </div>
            <Content></Content>
        </div>
    )
}

export default Header