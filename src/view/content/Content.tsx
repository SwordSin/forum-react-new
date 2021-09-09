import Card from '@/component/card/Card'
import Tablist from '@/view/tablist/Tablist'
import Titlelist from '@/view/titlelist/Titlelist'
import TitleContent from '@/view/titleContent/TitleContent'
const ContentStyle = require('./Content.module.scss')
import { InlintStyleType } from '@/shims'
import { Route, useRouteMatch } from 'react-router-dom'

const tablistStyle: InlintStyleType = {
    flex: '1 80%'
}
const titlelistStyle: InlintStyleType = {
    flex: '1 80%',
    marginTop: '30px',
    paddingLeft: '0px'
}

const Content = function() {
    const math = useRouteMatch()
    return (
        <div className={ContentStyle.content}>
            <div>
                <Card component={Tablist} style={tablistStyle}></Card>
                <Route path={math.url + '/:titleType'} exact render={() => <Card component={Titlelist} style={titlelistStyle}></Card>} />
                <Route path={math.url + '/:titleType' +  '/:titleId'} exact render={() => <TitleContent ></TitleContent>} />
            </div>
        </div>
    )
}

export default Content