const TopicStyle = require('./Topic.module.scss')
import {InlintStyleType} from '@/shims'

interface TopicComponentProps {
    name: string;
    href?: string;
    style?: InlintStyleType;
}


const Topic = function(props: TopicComponentProps) {
    return (
        <a href={props.href} className={TopicStyle.topicLink} style={props.style}>{props.name}</a>
    )
}

export default  Topic