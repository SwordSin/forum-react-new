const MybuttonStyle = require('./Button.module.scss')
import { useHistory } from 'react-router-dom'

interface ButtonContent{
    name: string;
    style?: {[key:string]: string};
    path?: string;
}

const Button = function(props: ButtonContent) {
    const history = useHistory()
    const getPath = () => {
        history.push({
            pathname: props.path
        })
    }

    return (
        <div className={MybuttonStyle.mybutton} style={props.style} onClick={getPath}>{props.name}</div>
    )
}


export default Button