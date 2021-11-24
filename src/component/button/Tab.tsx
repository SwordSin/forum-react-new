const MyTabStyle = require('./Tab.module.scss')
import { useHistory } from 'react-router-dom'

interface TabContent{
    name: string;
    style?: {[key:string]: string};
    path?: string;
}

const Tab = function(props: TabContent) {
    const history = useHistory()
    const getPath = () => {
        history.push({
            pathname: props.path
        })
    }

    return (
        <div className={MyTabStyle.mytab} style={props.style} onClick={getPath}>{props.name}</div>
    )
}


export default Tab