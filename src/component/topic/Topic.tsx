const TopicStyle = require('./Topic.module.scss')
import {InlintStyleType} from '@/typings/shims'
import { useHistory } from 'react-router-dom'

interface TopicComponentProps {
    name: string;
    href?: string;
    style?: InlintStyleType;
    path?: string
}


const Topic = function(props: TopicComponentProps) {
    const history = useHistory()

    const redirectRouter = () => {
        history.push({
            pathname: props.path
        })
    }
    return (
        <a href={props.href} className={TopicStyle.topicLink} style={props.style} onClick={ redirectRouter }>{props.name}</a>
    )
}

export default  Topic