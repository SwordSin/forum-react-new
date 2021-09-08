import Card from '@/component/card/Card'
import Tablist from '@/view/tablist/Tablist'
import Titlelist from '@/view/titlelist/Titlelist'
const ContentStyle = require('./Content.module.scss')

const tablistStyle = {
    flex: '1 80%'
}
const titlelistStyle = {
    flex: '1 80%',
    marginTop: '30px',
    paddingLeft: '0px'
}

const Content = function() {
    return (
        <div className={ContentStyle.content}>
            <div>
                <Card component={Tablist} style={tablistStyle}></Card>
                <Card component={Titlelist} style={titlelistStyle}></Card>
            </div>
        </div>
    )
}

export default Content