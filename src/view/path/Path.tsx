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
                    return (
                        <Topic name={name} key={index.toString() + 'path'} style={topicStyle}></Topic>
                    )
                })
            }
        </div>
    )
}

export default Path