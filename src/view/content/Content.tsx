import Card from '@/component/card/Card'
import Tablist from '@/view/tablist/Tablist'
import Titlelist from '@/view/titlelist/Titlelist'
import TitleContent from '@/view/titleContent/TitleContent'
import UserCard from '@/view/user/UserCard'
import ForumState from '@/view/forumState/ForumState'
import Vote from '@/view/vote/Vote'
const ContentStyle = require('./Content.module.scss')
import { InlintStyleType } from '@/typings/shims'
import { Route, useRouteMatch, useLocation  } from 'react-router-dom'
import HotList from '@/view/hotList/HotList'

import EditorIndex from '@/view/editor/index'
import EditorTips from '@/view/editor/EditorTips'
import React from 'react'

const marginTop:InlintStyleType = {
    marginTop: '25px'
}

const tablistStyle: InlintStyleType = {
    flex: '1 80%'
}
const titlelistStyle: InlintStyleType = {
    flex: '1 73%',
    ...marginTop,
    paddingLeft: '0px'
}

const leftBoxStyle:InlintStyleType = {
    flex: '1 15%',
    paddingLeft: '0px',
    marginLeft: '2%'
}

const usercardStyle: InlintStyleType = {
    ...marginTop,
    paddingLeft: '0px',
    marginLeft: '2%',
    height: '190px'
}


const titleContentStyle: InlintStyleType = {
    flex: '1 80%',
    ...marginTop,
    paddingLeft: '0px'
}

const editorContentStyle: InlintStyleType = {
    flex: '1 65%',
    paddingLeft: '0px',
    // width: '60%',
    // margin: 'auto',
    marginTop: '20px'
    
}

const editorTipsContentStyle = {
    flex: '1 25%',
    marginLeft: '2%',
    paddingLeft: '20px',
    marginTop: '20px',
    height: '400px'
}

const Content = function() {
    const math = useRouteMatch()
    const loaction = useLocation()
    return (
        <div className={ContentStyle.content}>
            <div>
                <Card component={Tablist} style={tablistStyle}></Card>
                {
                    loaction.pathname === '/content/editor'
                    ? <React.Fragment>
                        <Route path={math.url + '/editor'} render={() => <Card component={EditorIndex} style={editorContentStyle}></Card>} exact></Route>
                        <Route path={math.url + '/editor'} render={() => <Card component={EditorTips} style={editorTipsContentStyle}></Card>} exact></Route>
                    </React.Fragment>
                    : <React.Fragment>
                        <Route path={math.url + '/:titleType'} exact>
                            <Card component={Titlelist} style={titlelistStyle}></Card>
                            <div style={leftBoxStyle}>
                                <Card component={UserCard} style={usercardStyle}></Card>
                                <Card component={HotList} style={{...usercardStyle, height: '394px'}}></Card>
                                <Card component={ForumState} style={usercardStyle}></Card>
                                <Card component={Vote} style={usercardStyle}></Card>
                            </div>
                        </Route>
                        <Route path={math.url + '/:titleType' +  '/:titleId'} exact render={() => <Card component={TitleContent} style={titleContentStyle}></Card>} />
                    </React.Fragment>
                        
                }
            </div>
        </div>
    )
}

export default Content