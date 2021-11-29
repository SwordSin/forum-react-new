const MyTabStyle = require('./Tab.module.scss')
import { useHistory } from 'react-router-dom'


interface ClickTabFun {
    ():void
}

interface TabContent{
    name: string;
    style?: {[key:string]: string};
    path?: string;
    callback?: ClickTabFun;
}

const Tab = function(props: TabContent) {
    const history = useHistory()
    const getPath = () => {
        history.push({
            pathname: props.path
        })
        // 跳转路由后执行回调函数
        if(props.callback !== null && typeof props.callback === 'function') {
            props.callback()
        }
    }

    return (
        <div className={MyTabStyle.mytab} style={props.style} onClick={getPath} >{props.name}</div>
    )
}


export default Tab