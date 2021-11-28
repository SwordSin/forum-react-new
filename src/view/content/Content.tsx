import Card from '@/component/card/Card'
import Tablist from '@/view/tablist/Tablist'
import Titlelist from '@/view/titlelist/Titlelist'
import TitleContent from '@/view/titleContent/TitleContent'
import UserCard from '@/view/user/UserCard'
const ContentStyle = require('./Content.module.scss')
import { InlintStyleType } from '@/shims'
import { Route, useRouteMatch, useLocation  } from 'react-router-dom'

import EditorIndex from '@/view/editor/index'
import React from 'react'

const tablistStyle: InlintStyleType = {
    flex: '1 80%'
}
const titlelistStyle: InlintStyleType = {
    flex: '1 75%',
    marginTop: '30px',
    paddingLeft: '0px'
}
const usercardStyle: InlintStyleType = {
    flex: '1 13%',
    marginTop: '30px',
    paddingLeft: '0px',
    marginLeft: '2%'
}


const titleContentStyle: InlintStyleType = {
    flex: '1 80%',
    marginTop: '30px',
    paddingLeft: '0px'
}

const editorContentStyle: InlintStyleType = {
    flex: '1 80%',
    marginTop: '20px',
    paddingLeft: '0px'
}

const Content = function() {
    const math = useRouteMatch()
    const loaction = useLocation()
    console.log('查看当前路由' + loaction.pathname)
    return (
        <div className={ContentStyle.content}>
            <div>
                <Card component={Tablist} style={tablistStyle}></Card>
                {
                    loaction.pathname === '/content/editor'
                    ? <Route path={math.url + '/editor'} render={() => <Card component={EditorIndex} style={editorContentStyle}></Card>} exact></Route>
                    : <React.Fragment>
                        <Route path={math.url + '/:titleType'} exact>
                            <Card component={Titlelist} style={titlelistStyle}></Card>
                            <Card component={UserCard} style={usercardStyle}></Card>
                        </Route>
                        <Route path={math.url + '/:titleType' +  '/:titleId'} exact render={() => <Card component={TitleContent} style={titleContentStyle}></Card>} />
                    </React.Fragment>
                        
                }
                {/* <Route path={math.url + '/editor'} component={ EditorIndex } exact></Route>
                <Route path={math.url + '/:titleType'} exact>
                    <Card component={Titlelist} style={titlelistStyle}></Card>
                    <Card component={UserCard} style={usercardStyle}></Card>
                </Route>
                <Route path={math.url + '/:titleType' +  '/:titleId'} exact render={() => <Card component={TitleContent} style={titleContentStyle}></Card>} /> */}
            </div>
        </div>
    )
}

export default Content