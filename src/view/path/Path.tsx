import Topic from '@/component/topic/Topic'
import { InlintStyleType } from '@/shims'

interface PathData {
    pathlist: string[];
}

const topicStyle:InlintStyleType = {
    display: 'inline'
}

const Path = function(props:PathData) {
    return (
        <div>
            {
                props.pathlist.map((value, index) => {
                    let name = value + '/'
                    if (index === props.pathlist.length - 1) {
                        name = value
                    }
                    const path = '/' + props.pathlist.slice(0, index + 1).join('/')
                    return (
                        <Topic name={name} key={index.toString() + 'path'} style={topicStyle} path={path.replace(/\/首页/, '/content')}></Topic>
                    )
                })
            }
        </div>
    )
}

export default Path